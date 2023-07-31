import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

const AboutPage = memo(() => {
  const { t } = useTranslation('admin'); // перевод согласно чанку (about.json в public/locales)
  return (
    <Page>
      { t('Admin панель')}
    </Page>
  )
})

export default AboutPage
