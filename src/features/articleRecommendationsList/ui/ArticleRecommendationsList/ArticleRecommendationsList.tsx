/* eslint-disable i18next/no-literal-string */

import { ArticleList } from 'entities/Article';
import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { VStack } from 'shared/ui/Stack';
import { Text, TextSize } from 'shared/ui/Text/Text';

interface ArticleRecommendationsListProps {
  className?: string
} 

export const ArticleRecommendationsList = memo(({ className }: ArticleRecommendationsListProps) => {
  const { t } = useTranslation('article');

  const { data: articles, isLoading, error } = useArticleRecommendationsList(3);

  if (isLoading) {
    return <VStack>Loading... </VStack>;
  }

  if (error) {
    return <VStack>{error}</VStack>;
  }

  return (
    <VStack gap='8'
      className={classNames('cls.ArticleRecommendationsList', {}, [className]) }
    >
      <Text size={TextSize.L} title={t('Рекомендуем')}/>
      <ArticleList 
        articles={articles}
        target='_blank'
      />
    </VStack> 
  )
})
