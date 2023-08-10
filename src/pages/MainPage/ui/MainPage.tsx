import { Page } from '@/widgets/Page';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

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
