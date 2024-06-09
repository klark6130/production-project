import { ArticleSortField } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { SortOrder } from '@/shared/types/sort';
import { Select, SelectOption } from '@/shared/ui/deprecated/Select';
import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './ArticleSortSelector.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';
import { ListBox } from '@/shared/ui/redesigned/Popups';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

interface ArticleSortSelectorProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: ArticleSortField) => void;
}

export const ArticleSortSelector = memo(
    ({
        className,
        order,
        sort,
        onChangeOrder,
        onChangeSort,
    }: ArticleSortSelectorProps) => {
        const { t } = useTranslation('article');

        const orderOptions = useMemo<Array<SelectOption<SortOrder>>>(
            () => [
                {
                    value: 'asc',
                    content: t('возрастанию'),
                },
                {
                    value: 'desc',
                    content: t('убыванию'),
                },
            ],
            [t],
        );

        const sortFieldOptions = useMemo<Array<SelectOption<ArticleSortField>>>(
            () => [
                {
                    value: ArticleSortField.CREATED,
                    content: t('дате создания'),
                },
                {
                    value: ArticleSortField.TITLE,
                    content: t('заголовку'),
                },
                {
                    value: ArticleSortField.VIEWS,
                    content: t('просмотрам'),
                },
            ],
            [t],
        );

        return (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <div
                        className={classNames(
                            cls.ArticleSortSelectorRedesigned,
                            {},
                            [className],
                        )}
                    >
                        <VStack gap="8">
                            <Text text={t('Сортировка по:')} />
                            <ListBox
                                items={sortFieldOptions}
                                value={sort}
                                onChange={onChangeSort}
                            />
                            <ListBox
                                items={orderOptions}
                                value={order}
                                onChange={onChangeOrder}
                            />
                        </VStack>
                    </div>
                }
                off={
                    <div
                        className={classNames(cls.ArticleSortSelector, {}, [
                            className,
                        ])}
                    >
                        <Select
                            options={sortFieldOptions}
                            label={t('Сортировать по')}
                            value={sort}
                            onChange={onChangeSort}
                        />
                        <Select
                            options={orderOptions}
                            label={t('по')}
                            value={order}
                            onChange={onChangeOrder}
                            className={cls.order}
                        />
                    </div>
                }
            />
        );
    },
);
