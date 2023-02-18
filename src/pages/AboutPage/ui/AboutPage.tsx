import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {
  const { t } = useTranslation('about'); // перевод согласно чанку (about.json в public/locales)
  return (
    <div>
      { t('О сайте')}
    </div>
  )
}

export default AboutPage
