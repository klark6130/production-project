import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

const AboutPage = memo(() => {
  const { t } = useTranslation('about'); // перевод согласно чанку (about.json в public/locales)
  return (
    <Page>
      { t('О сайте')}
    </Page>
  )
})

export default AboutPage
