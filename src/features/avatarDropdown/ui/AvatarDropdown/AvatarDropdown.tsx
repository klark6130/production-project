import {
    getUserAuthData,
    isUserAdmin,
    isUserManager,
    userActions,
} from '@/entities/User';
import {
    getRouteAdmin,
    getRouteProfile,
    getRouteSettings,
} from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { Dropdown as DropdownDeprecated } from '@/shared/ui/deprecated/Popups';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Dropdown } from '@/shared/ui/redesigned/Popups';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

interface AvatarDropdownProps {
    className?: string;
}
export const AvatarDropdown = memo(({ className }: AvatarDropdownProps) => {
    const { t } = useTranslation();

    const authData = useSelector(getUserAuthData);

    const dispatch = useDispatch();
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    const isAdminPanelAvailable = isAdmin || isManager;

    if (!authData) {
        return null;
    }

    const items = [
        ...(isAdminPanelAvailable
            ? [
                  {
                      content: t('Админка'),
                      href: getRouteAdmin(),
                  },
              ]
            : []),
        {
            content: t('Настройки'),
            href: getRouteSettings(),
        },
        {
            content: t('Профиль'),
            href: getRouteProfile(authData.id),
        },
        {
            content: t('Выйти'),
            onClick: onLogout,
        },
    ];

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Dropdown
                    className={classNames('', {}, [className])}
                    direction="bottom left"
                    items={items}
                    trigger={<Avatar size={40} src={authData.avatar} />}
                />
            }
            off={
                <DropdownDeprecated
                    className={classNames('', {}, [className])}
                    direction="bottom left"
                    items={items}
                    trigger={
                        <AvatarDeprecated
                            fallbackInverted={true}
                            size={30}
                            src={authData.avatar}
                        />
                    }
                />
            }
        />
    );
});
