import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';
import { CSSProperties, useMemo } from 'react';
import { AppImage } from '../../redesigned/AppImage';
import { Skeleton } from '../Skeleton';
import UserIcon from '@/shared/assets/icons/user_filled.svg';
import { Icon } from '../Icon';

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
}

export const Avatar = ({ className, src, size, alt }: AvatarProps) => {
    const mods: Mods = {};

    const styles = useMemo<CSSProperties>(() => {
        return {
            width: size || 100,
            height: size || 100,
        };
    }, [size]);

    const errorFallback = (
        <Icon Svg={UserIcon} width={size} height={size} className={className} />
    );

    return (
        <AppImage
            fallback={<Skeleton width={size} height={size} border="50%" />}
            errorFallback={errorFallback}
            src={src}
            style={styles}
            alt={alt}
            className={classNames(cls.Avatar, mods, [className])}
        />
    );
};
