import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import { SidebarItemType } from '../types/sidebar';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

import AboutIcon from 'shared/assets/icons/about.svg';
import MainIcon from 'shared/assets/icons/main.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';
import ArticlesIcon from 'shared/assets/icons/articles.svg';

export const getSidebarItems = createSelector(
  getUserAuthData,
  (userData) => {
    const SidebarItemList: SidebarItemType[] = [
      {
        path: RoutePath.main,
        Icon: MainIcon,
        text: 'Главная'
      },
      {
        path: RoutePath.about,
        Icon: AboutIcon,
        text: 'О сайте'
      }
    ]

    if (userData) {
      SidebarItemList.push(
        {
          path: RoutePath.profile + userData?.id,
          Icon: ProfileIcon,
          text: 'Профиль',
          authOnly: true
        },
        {
          path: RoutePath.articles,
          Icon: ArticlesIcon,
          text: 'Статьи',
          authOnly: true
        }
      )
    }

    return SidebarItemList;
  }
)