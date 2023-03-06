import { BugButton } from 'app/providers/ErrorBoundary';
import { Counter } from 'entities/Counter';
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

const MainPage = memo(() => {
  const { t } = useTranslation();

  return (
    <div>
      { t('Главная страница')}
      {/* <Counter/> */}
    </div>
  )
})

export default MainPage
