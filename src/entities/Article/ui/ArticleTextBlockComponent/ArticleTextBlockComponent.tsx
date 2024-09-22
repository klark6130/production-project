import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleTextBlockComponent.module.scss';
import { memo } from 'react';
import { ArticleTextBlock } from '../../model/types/article';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text } from '@/shared/ui/redesigned/Text';

interface ArticleTextBlockComponentProps {
    className?: string;
    block: ArticleTextBlock;
}
export const ArticleTextBlockComponent = memo(
    ({ className, block }: ArticleTextBlockComponentProps) => {
        const { t } = useTranslation();
        return (
            <div
                className={classNames(cls.ArticleTextBlockComponent, {}, [
                    className,
                ])}
            >
                {block.title && (
                    <ToggleFeatures
                        feature="isAppRedesigned"
                        on={<Text title={block.title} className={cls.title} />}
                        off={
                            <TextDeprecated
                                title={block.title}
                                className={cls.title}
                            />
                        }
                    />
                )}
                {block.paragraphs.map((paragraph, index) => (
                    <ToggleFeatures
                        key={index}
                        feature="isAppRedesigned"
                        on={
                            <Text
                                key={index}
                                text={paragraph}
                                className={cls.paragraph}
                            />
                        }
                        off={
                            <TextDeprecated
                                key={index}
                                text={paragraph}
                                className={cls.paragraph}
                            />
                        }
                    />
                ))}
            </div>
        );
    },
);
