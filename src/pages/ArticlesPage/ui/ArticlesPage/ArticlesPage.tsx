import { classNames } from '@/shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect';
import { Page } from '@/widgets/Page';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { getArticlesPageError } from '../../model/selectors/articlesPageSelectors';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage';
import { initArticlesPage } from '../../model/services/initArticlesPage';
import { articlesPageReducer } from '../../model/slices/articlesPageSlices';
import { ArticleInfiniteList } from '../ArticleInfiniteList/ArticleInfiniteList';
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
  className?: string
} 

const reducers: ReducersList = {
  articlesPage: articlesPageReducer
}

const ArticlesPage = ({ className }: ArticlesPageProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const error = useSelector(getArticlesPageError);

  const [searchParams, setSearchParams] = useSearchParams();

  const onLoadNextPart = useCallback(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchNextArticlesPage())
    }
  }, [dispatch])

  useInitialEffect(() => {
    dispatch(initArticlesPage(searchParams))
  })

  if (error) {
    return (
      <div>{error}</div>
    )
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <Page 
        data-testid={'ArticlesPage'}
        onScrollEnd={onLoadNextPart}
        className={classNames(cls.ArticlesPage, {}, [className]) }
      >
        <ArticlesPageFilters />
        <ArticleInfiniteList className={cls.list}/>
      </Page>
    </DynamicModuleLoader>
  )
}

export default memo(ArticlesPage);