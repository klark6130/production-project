import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './SettingsPage.module.scss';
import { memo } from 'react';
import { Text } from '@/shared/ui/redesigned/Text';
import { Page } from '@/widgets/Page';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { UiDesignSwitcher } from '@/features/uiDesignSwitcher';

interface SettingsPageProps {
    className?: string;
    isLoading?: boolean;
}

const SettingsPage = memo(({ className, isLoading }: SettingsPageProps) => {
    const { t } = useTranslation('SettingsPage');

    return (
        <Page className={classNames(cls.SettingsPage, {}, [className])}>
            <VStack gap="16">
                <Text title={t('Настройки пользователя')} />
                <UiDesignSwitcher />
            </VStack>
        </Page>
    );
});

export default SettingsPage;
