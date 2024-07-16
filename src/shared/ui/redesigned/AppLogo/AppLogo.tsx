import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import AppSvg from '@/shared/assets/icons/appLogo.svg';
import cls from './AppLogo.module.scss';
import { HStack } from '../Stack';

interface AppLogoProps {
    className?: string;
    size?: number;
}

export const AppLogo = memo(({ className, size = 50 }: AppLogoProps) => {
    const { t } = useTranslation();
    return (
        <HStack
            max
            justify="center"
            className={classNames(cls.appLogo, {}, [className])}
        >
            <AppSvg
                width={size}
                height={size}
                className={cls.appLogo}
                color="black"
            />
            <div className={cls.gradientBig}></div>
            <div className={cls.gradientSmall}></div>
        </HStack>
    );
});
