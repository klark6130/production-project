import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleImageBlockComponent.module.scss';
import { memo } from 'react';
import { ArticleImageBlock } from '../../model/types/article';
import { Text as TextDeprecated, TextAlign } from '@/shared/ui/deprecated/Text';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text } from '@/shared/ui/redesigned/Text';

interface ArticleImageBlockComponentProps {
    className?: string;
    block: ArticleImageBlock;
}
export const ArticleImageBlockComponent = memo(
    ({ className, block }: ArticleImageBlockComponentProps) => {
        const { t } = useTranslation();
        return (
            <div
                className={classNames(cls.ArticleImageBlockComponent, {}, [
                    className,
                ])}
            >
                <img src={block.src} className={cls.img} alt={block.title} />
                {block.title && (
                    <ToggleFeatures
                        feature="isAppRedesigned"
                        on={<Text text={block.title} align={'center'} />}
                        off={
                            <TextDeprecated
                                text={block.title}
                                align={TextAlign.CENTER}
                            />
                        }
                    />
                )}
            </div>
        );
    },
);
