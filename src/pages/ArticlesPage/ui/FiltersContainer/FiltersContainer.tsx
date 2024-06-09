import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticlesFilters } from '@/widgets/ArticlesFilters';
import { useArticleFilters } from '../../lib/hooks/useArticleFilters';

interface FiltersContainerProps {
    className?: string;
}
export const FiltersContainer = memo(({ className }: FiltersContainerProps) => {
    const { t } = useTranslation();

    const {
        onChangeOrder,
        onChangeSearch,
        onChangeSort,
        onChangeType,
        order,
        search,
        sort,
        type,
    } = useArticleFilters();

    return (
        <ArticlesFilters
            search={search}
            onChangeOrder={onChangeOrder}
            onChangeSearch={onChangeSearch}
            onChangeSort={onChangeSort}
            onChangeType={onChangeType}
            order={order}
            sort={sort}
            type={type}
            className={className}
        />
    );
});
