import { RatingCard } from '@/entities/Rating';
import { getUserAuthData } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Skeleton } from '@/shared/ui/Skeleton';
import { Text, TextTheme } from '@/shared/ui/Text';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useArticleRating, useRateArticle } from '../../api/articleRatingApi';

export interface ArticleRatingProps {
  className?: string
  articleId: string
} 

const ArticleRating = memo(({ className, articleId }: ArticleRatingProps) => {
  const { t } = useTranslation();

  const userData = useSelector(getUserAuthData);
  const { data, isLoading, isError: isErrorArticleRating, error: errorArticleRating } = useArticleRating({ articleId, userId: userData?.id ?? '' });

  const [rateArticleMutation] = useRateArticle();

  const rating = data?.[0];

  const handlerRateArticle = useCallback((starsCount: number, feedback?: string) => {
    try {
      rateArticleMutation({
        articleId,
        rate: starsCount,
        userId: userData?.id ?? '',
        feedback
      })
    } catch (error) {
      // need handle error
      console.error(error)
    }
    
  }, [articleId, userData, rateArticleMutation])

  const onAccept = useCallback((starsCount: number, feedback?: string) => {
    handlerRateArticle(starsCount, feedback)
  }, [handlerRateArticle]);

  const onCancel = useCallback((starsCount: number) => {
    handlerRateArticle(starsCount)
  }, [handlerRateArticle])

  if (isLoading) {
    return <Skeleton width={'100%'} height={120}/>
  }

  if (isErrorArticleRating) {
    console.log('errorArticleRating', errorArticleRating)
    return (
      <Text theme={TextTheme.ERROR} title={t('Ошибка загрузки рейтинга')} text={String(errorArticleRating)}/>
    )
  }

  return (
    <RatingCard className={classNames('', {}, [className]) }
      onAccept={onAccept}
      onCancel={onCancel}
      rate={rating?.rate}
      title={t('Оценить статью')}
      feedbackTitle={t('Оставьте свой отзыв от статье, это поможет улучшить качество')}
      
      hasFeedback
    />
  )
});

export default ArticleRating;