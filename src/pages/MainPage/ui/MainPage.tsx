import { BugButton } from 'app/providers/ErrorBoundary';
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';

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
