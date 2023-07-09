import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page/Page';
import { StarRating } from '@/shared/ui/StarRating/StarRating';
import { RatingCard } from '@/entities/Rating';

const MainPage = memo(() => {
  const { t } = useTranslation();

  return (
    <Page>
      { t('Главная страница')}
      {/* <Counter/> */}
      <RatingCard 
        title={'Как вам статья'} 
        feedbackTitle={'Оставьте отзыв от статье'}
        hasFeedback={true}
      />
    </Page>
  )
})

export default MainPage
