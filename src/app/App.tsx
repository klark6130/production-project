import { getUserInited, initAuthData, useJsonSettings } from '@/entities/User';
import { AppLoaderLayout } from '@/shared/layouts/AppLoaderLayout';
import { MainLayout } from '@/shared/layouts/MainLayout';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useTheme } from '@/shared/lib/hooks/useTheme';
import { Navbar } from '@/widgets/Navbar';
import { PageLoader } from '@/widgets/PageLoader';
import { Sidebar } from '@/widgets/Sidebar';
import { memo, Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppToolbar } from './lib/useAppToolbar';
import { AppRouter } from './providers/router';
import { ThemeProvider } from './providers/ThemeProvider';
import { withTheme } from './providers/ThemeProvider/ui/withTheme';

const App = memo(function App() {
    const { theme } = useTheme();
    const dispatch = useAppDispatch();
    const inited = useSelector(getUserInited);

    const toolbar = useAppToolbar();

    useEffect(() => {
        if (!inited) {
            dispatch(initAuthData());
        }
    }, [inited, dispatch]);

    if (!inited) {
        console.log(
            'localStorage.setItem(LOCAL_STORAGE_LAST_DESIGN_KEY используется дважды!!!!!',
        );
        return (
            <div
                                    id="app"
                                    className={classNames('app_redesigned', {}, [theme])}
                                >
                                    <AppLoaderLayout />
                                </div>
        );
    }

    return (
        <div
                            id="app"
                            className={classNames('app_redesigned', {}, [theme])}
                        >
                            <Suspense fallback="">
                                <MainLayout
                                    header={<Navbar />}
                                    content={<AppRouter />}
                                    sidebar={<Sidebar />}
                                    toolbar={toolbar}
                                />
                            </Suspense>
                        </div>
    );
});

export default withTheme(App);
