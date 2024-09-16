import { getUserAuthData } from '@/entities/User';
import AboutIconDeprecated from '@/shared/assets/icons/about.svg';
import ArticlesIconDeprecated from '@/shared/assets/icons/articles.svg';
import MainIconDeprecated from '@/shared/assets/icons/main.svg';
import ProfileIconDeprecated from '@/shared/assets/icons/profile.svg';

import ActicleIcon from '@/shared/assets/icons/article.svg';
import ProfileIcon from '@/shared/assets/icons/avatar.svg';
import MainIcon from '@/shared/assets/icons/home.svg';
import AboutIcon from '@/shared/assets/icons/Info.svg';

import {
    getRouteAbout,
    getRouteArticles,
    getRouteMain,
    getRouteProfile,
} from '@/shared/const/router';
import { toggleFeatures } from '@/shared/lib/features/lib/toggleFeatures';
import { createSelector } from '@reduxjs/toolkit';
import { SidebarItemType } from '../types/sidebar';

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
    const SidebarItemList: SidebarItemType[] = [
        {
            path: getRouteMain(),
            Icon: toggleFeatures({
                name: 'isAppRedesigned',
                on: () => MainIcon,
                off: () => MainIconDeprecated
            }),
            text: 'Главная',
        },
        {
            path: getRouteAbout(),
            Icon: toggleFeatures({
                name: 'isAppRedesigned',
                on: () => AboutIcon,
                off: () => AboutIconDeprecated
            }),
            text: 'О сайте',
        },
    ];

    if (userData) {
        SidebarItemList.push(
            {
                path: getRouteProfile(userData.id),
                Icon: toggleFeatures({
                    name: 'isAppRedesigned',
                    on: () => ProfileIcon,
                    off: () => ProfileIconDeprecated
                }),
                text: 'Профиль',
                authOnly: true,
            },
            {
                path: getRouteArticles(),
                Icon: toggleFeatures({
                    name: 'isAppRedesigned',
                    on: () => ActicleIcon,
                    off: () => ArticlesIconDeprecated
                }),
                text: 'Статьи',
                authOnly: true,
            },
        );
    }

    return SidebarItemList;
});
