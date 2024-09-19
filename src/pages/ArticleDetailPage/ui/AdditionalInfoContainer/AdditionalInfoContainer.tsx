import { getArticleDetailsData } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/redesigned/Card';
import { ArticleAdditionalInfo } from '@/widgets/ArticleAdditionalInfo';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import cls from './AdditionalInfoContainer.module.scss';
import { getRouteArticleEdit } from '@/shared/const/router';
import { useNavigate } from 'react-router-dom';

export const AdditionalInfoContainer = memo(() => {
    const article = useSelector(getArticleDetailsData);

    const navigate = useNavigate();

    const onEditArticle = useCallback(() => {
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        if (article?.id) {
            navigate(getRouteArticleEdit(article?.id));
        }
    }, [navigate, article?.id]);

    if (!article) {
        return null;
    }

    return (
        <Card padding="24" border="round" className={classNames(cls.card)}>
            <ArticleAdditionalInfo
                author={article.user}
                createdAt={article.createdAt}
                views={article.views}
                onEdit={onEditArticle}
            />
        </Card>
    );
});
