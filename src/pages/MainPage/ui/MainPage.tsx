import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { StarRating } from '@/shared/ui/StarRating/StarRating';
import { RatingCard } from '@/entities/Rating';

const MainPage = memo(() => {
  const { t } = useTranslation();

  return (
    <Page>
      { t('Главная страница')}
      {/* <Counter/> */}
    </Page>
  )
})

export default MainPage
