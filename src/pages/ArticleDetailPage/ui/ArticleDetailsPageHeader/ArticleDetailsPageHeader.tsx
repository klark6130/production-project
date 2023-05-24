import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import cls from './ArticleDetailsPageHeader.module.scss';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useNavigate } from 'react-router-dom';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { getArticleDetailsData } from 'entities/Article';
import { getCanEditArticle } from '../../model/selectors/article';

interface ArticleDetailsPageHeaderProps {
  className?: string
} 
export const ArticleDetailsPageHeader = memo(({ className }: ArticleDetailsPageHeaderProps) => {
  const { t } = useTranslation('article');

  const navigate = useNavigate();
  const userData = useSelector(getUserAuthData);
  const article = useSelector(getArticleDetailsData);
  const canEdit = useSelector(getCanEditArticle);

  const onBackToList = useCallback(() => {
    navigate(RoutePath.articles);
  }, [navigate])

  const onEditArticle = useCallback(() => {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    navigate(`${RoutePath.article_details}${article?.id}/edit`);
  }, [navigate, article?.id])

  return (
    <div className={classNames(cls.ArticleDetailsPageHeader, {}, [className]) }>
      <Button theme={ButtonTheme.OUTLINE} onClick={onBackToList} >{t('Назад к списку')}</Button>
      { canEdit && (
        <Button 
          className={cls.editBtn}
          theme={ButtonTheme.OUTLINE} 
          onClick={onEditArticle} 
        >
          {t('Редактировать')}
        </Button>
      )}
    </div>
  )
});
