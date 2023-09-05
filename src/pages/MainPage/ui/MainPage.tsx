import { Button } from '@/shared/ui/Button';
import { Page } from '@/widgets/Page';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

const MainPage = memo(() => {
    const { t } = useTranslation();

    return (
        <Page data-testid={'MainPage'}>
            {t('Главная страница')}
            {/* <Counter/> */}
            <Button>{t('Тест кнопка')}</Button>
        </Page>
    );
});

export default MainPage;
