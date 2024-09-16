import { StateSchema } from '@/app/providers/StoreProvider';
import { getUIScrollByPath, uiActions } from '@/features/UI';
import { classNames } from '@/shared/lib/classNames/classNames';
import { toogleFeatures } from '@/shared/lib/features';
import { toggleFeatures } from '@/shared/lib/features/lib/toggleFeatures';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useInfiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect';
import { useThrottle } from '@/shared/lib/hooks/useThrottle';
import { TestProps } from '@/shared/types/tests';
import { MutableRefObject, ReactNode, UIEvent, memo, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import cls from './Page.module.scss';

interface PageProps extends TestProps {
    className?: string;
    children: ReactNode;
    onScrollEnd?: () => void;
}

export const PAGE_ID = 'PAGE_ID';

export const Page = memo((props: PageProps) => {
    const { className, children, onScrollEnd } = props;
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

    const dispatch = useAppDispatch();
    const location = useLocation();
    const scrollPosition = useSelector((state: StateSchema) =>
        getUIScrollByPath(state, location.pathname),
    );

    useInfiniteScroll({
        triggerRef,
        wrapperRef: toggleFeatures({
            name: 'isAppRedesigned',
            on: () => undefined,
            off: () => wrapperRef,
        }),
        callback: onScrollEnd,
    });

    const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
        console.log(e.currentTarget.scrollTop);
        dispatch(
            uiActions.setScrollPosition({
                position: e.currentTarget.scrollTop,
                path: location.pathname,
            }),
        );
    }, 100);

    useInitialEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition;
    });

    const classOfPage = toogleFeatures({
        name: 'isAppRedesigned',
        on() {
            return cls.PageRedesigned;
        },
        off() {
            return cls.Page;
        },
    });

    return (
        <main
            ref={wrapperRef}
            className={classNames(classOfPage, {}, [className])}
            onScroll={onScroll}
            id={PAGE_ID}
            data-testid={props['data-testid'] ?? 'Page'}
        >
            {children}
            {onScrollEnd ? (
                <div className={cls.trigger} ref={triggerRef} />
            ) : null}
        </main>
    );
});
