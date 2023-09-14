import { CallExpression, Project, SyntaxKind, Node } from 'ts-morph';

const removedFeatureName = process.argv[2];
const featureState = process.argv[3]; // on/off

if(!removedFeatureName){
    throw new Error('Укажите название feature-флага для удаления')
}

if(!featureState){
    throw new Error('Укажите состояние фичи (on или off)')
}

if(featureState !== 'on' && featureState !== 'off'){
    throw new Error('Состояние фичи должно быть on или off')
}

const project = new Project({});

project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

const files = project.getSourceFiles();

function isToggleFunction(node: Node){
    let isToggleFeatures = false;

    node.forEachChild(child => {
        if(child.isKind(SyntaxKind.Identifier) && child.getText() === 'toogleFeatures'){ 
            isToggleFeatures = true;
        }
    })

    return isToggleFeatures;
}

files.forEach((sourceFile) => {
    sourceFile.forEachDescendant(node => {
        if(node.isKind(SyntaxKind.CallExpression) && isToggleFunction(node)){
           const objectOptions = node.getFirstDescendantByKind(SyntaxKind.ObjectLiteralExpression);

           if(!objectOptions) return;

           const onFunctionProperty = objectOptions.getProperty('on');
           const offFunctionProperty = objectOptions.getProperty('off');
           const featureNameProperty = objectOptions.getProperty('name');

           const onFunction = onFunctionProperty?.getFirstDescendantByKind(SyntaxKind.ArrowFunction);
           const offFunction = offFunctionProperty?.getFirstDescendantByKind(SyntaxKind.ArrowFunction);
           const featureName = featureNameProperty?.getFirstDescendantByKind(SyntaxKind.StringLiteral)?.getText().slice(1, -1);

            console.log('func on: ', onFunction?.getText())
            console.log('func off: ', offFunction?.getText())
            console.log('featureName', featureName)

            if(featureName !== removedFeatureName){
                return;
            }

            if(featureState === 'on'){
                console.log('save onFunction', onFunction?.getBody().getText() ?? '')
                node.replaceWithText(onFunction?.getBody().getText() ?? '')
            }

            if(featureState === 'off'){
                console.log('save offFunction', offFunction?.getBody().getText() ?? '')
                node.replaceWithText(offFunction?.getBody().getText() ?? '')
            }
        }
    })
});

project.save();
