import { ArticleViewSelector } from '@/features/ArticleViewSelector';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useArticleFilters } from '../../lib/hooks/useArticleFilters';

interface ViewSelectorContainerProps {
    className?: string;
}
export const ViewSelectorContainer = memo(
    ({ className }: ViewSelectorContainerProps) => {
        const { t } = useTranslation();

        const { view, onChangeView } = useArticleFilters();

        return (
            <ArticleViewSelector
                className={className}
                view={view}
                onViewClick={onChangeView}
            />
        );
    },
);
