import { classNames } from 'shared/lib/classNames/classNames';
import { MutableRefObject, ReactNode, UIEvent, memo, useRef } from 'react';
import cls from './Page.module.scss';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { getUIScrollByPath, uiActions } from 'features/UI';
import { useLocation } from 'react-router-dom';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { useSelector } from 'react-redux';
import { StateSchema } from 'app/providers/StoreProvider';
import { useThrottle } from 'shared/lib/hooks/useThrottle';

interface PageProps {
  className?: string
  children: ReactNode
  onScrollEnd?: () => void
} 

export const PAGE_ID = 'PAGE_ID';

export const Page = memo(({ className, children, onScrollEnd }: PageProps) => {
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

  const dispatch = useAppDispatch();
  const location = useLocation();
  const scrollPosition = useSelector((state: StateSchema) => getUIScrollByPath(state, location.pathname))

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd
  })

  const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
    console.log(e.currentTarget.scrollTop);
    dispatch(uiActions.setScrollPosition({
      position: e.currentTarget.scrollTop,
      path: location.pathname
    }))
  }, 100);

  useInitialEffect(() => {
    wrapperRef.current.scrollTop = scrollPosition;
  })

  return (
    <section 
      ref={wrapperRef}
      className={classNames(cls.Page, {}, [className]) }
      onScroll={onScroll}
      id={PAGE_ID}
    >
      {children}
      { onScrollEnd ? <div className={cls.trigger} ref={triggerRef}/> : null }
    </section>
  )
});
