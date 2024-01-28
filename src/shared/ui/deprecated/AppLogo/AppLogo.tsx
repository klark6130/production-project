import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import AppSvg from '@/shared/assets/icons/appLogo.svg';
import cls from './AppLogo.module.scss';
import { HStack } from '../Stack';

interface AppLogoProps {
    className?: string;
}

/**
 * Устарел, использовать новые компоненты из папки redesigned
 * @deprecated
 */
export const AppLogo = memo(({ className }: AppLogoProps) => {
    const { t } = useTranslation();
    return (
        <HStack
            max
            justify="center"
            className={classNames(cls.appLogo, {}, [className])}
        >
            <div className={cls.gradientBig}></div>
            <div className={cls.gradientSmall}></div>
            <AppSvg className={cls.appLogo} />
        </HStack>
    );
});
