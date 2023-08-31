import { ArticleSortField } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { SortOrder } from '@/shared/types/sort';
import { Select, SelectOption } from '@/shared/ui/Select';
import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './ArticleSortSelector.module.scss';

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
            <div
                className={classNames(cls.ArticleSortSelector, {}, [className])}
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
        );
    },
);
