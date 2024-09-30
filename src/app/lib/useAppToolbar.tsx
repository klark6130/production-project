/* eslint-disable i18next/no-literal-string */
import { AppRoutes } from '@/shared/const/router';
import { useRouteChange } from '@/shared/lib/router/useRouterChanges';
import { ScrollToolbar } from '@/widgets/ScrollToolbar';
import { ReactElement } from 'react';

export function useAppToolbar() {
    const appRoute = useRouteChange();

    const toolbarByAppRoute: OptionalRecord<AppRoutes, ReactElement> = {
        [AppRoutes.ARTICLES]: <ScrollToolbar />,
        [AppRoutes.ARTICLE_DETAILS]: <ScrollToolbar />,
        [AppRoutes.MAIN]: <div>Main</div>,
        [AppRoutes.ABOUT]: <div>About</div>,
    };

    return toolbarByAppRoute[appRoute];
}
