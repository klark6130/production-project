import { Counter } from '@/entities/Counter';
import { getFeatureFlag, toogleFeatures } from '@/shared/lib/features';
import { Button } from '@/shared/ui/deprecated/Button';
import { Page } from '@/widgets/Page';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

const MainPage = memo(() => {
    const { t } = useTranslation();
    const isCounterEnabled = getFeatureFlag('isCounterEnabled');

    const counter = toogleFeatures({
        name: 'isCounterEnabled',
        on: () => <Counter on />,
        off: () => <Counter off />,
    });

    return (
        <Page data-testid={'MainPage'}>
            {t('Главная страница')}
            {isCounterEnabled && <Counter />}
            <br />
            <Button>{t('Тест кнопка')}</Button>
            <Button>{t('Тест Кнопка 2 для проверка автодеплоя --')}</Button>
            {counter}
        </Page>
    );
});

export default MainPage;
