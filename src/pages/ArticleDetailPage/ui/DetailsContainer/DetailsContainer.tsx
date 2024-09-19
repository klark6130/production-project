import { ArticleDetails } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/redesigned/Card';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

interface DetailsContainerProps {
    className?: string;
}
export const DetailsContainer = memo(({ className }: DetailsContainerProps) => {
    const { t } = useTranslation();

    const { id } = useParams<{ id: string }>();

    if (!id) {
        return null;
    }

    return (
        <Card max border="round" className={className} padding="24">
            <ArticleDetails id={id} />
        </Card>
    );
});
