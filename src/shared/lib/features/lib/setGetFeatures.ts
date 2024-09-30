import { LOCAL_STORAGE_LAST_DESIGN_KEY } from '@/shared/const/localtorage';
import { FeaturesFlags } from '@/shared/types/featureFlags';

const defaultFeatures: FeaturesFlags = {
    isAppRedesigned: localStorage.getItem(LOCAL_STORAGE_LAST_DESIGN_KEY) === 'new'
}

// ФИЧИ не меняются в ходе сесси, их не обязательно делать реактивными
let featureFlags: FeaturesFlags = {
    ...defaultFeatures
}

export function setFeatureFlags(newFeatureFlags?: FeaturesFlags){
    if(newFeatureFlags) {
        featureFlags = newFeatureFlags;
    }
}

export function getFeatureFlag(flag: keyof FeaturesFlags){
    return featureFlags[flag] ?? false;
}

export function getAllFeatureFlags(){
    return featureFlags;
}

