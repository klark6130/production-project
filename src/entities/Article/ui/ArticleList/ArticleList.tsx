import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { HTMLAttributeAnchorTarget, memo } from 'react';
import cls from './ArticleList.module.scss';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { List, ListRowProps, WindowScroller } from 'react-virtualized';
import { PAGE_ID } from 'widgets/Page/Page';

interface ArticleListProps {
  className?: string
  articles: Article[]
  isLoading?: boolean
  target?: HTMLAttributeAnchorTarget
  view?: ArticleView
  virtualized?: boolean
} 

const getSkeletons = (view: ArticleView) => {
  return new Array(view === ArticleView.TILE ? 9 : 3)
    .fill(0)
    .map((item, index) => (
      <ArticleListItemSkeleton className={cls.card} key={index} view={view}/>
    ))
}

export const ArticleList = memo(({ className, articles, view = ArticleView.TILE, isLoading, target, virtualized = true }: ArticleListProps) => {
  const { t } = useTranslation('article');

  const isBig = view === ArticleView.LIST;

  const itemsPerRow = isBig ? 1 : 3;

  const rowCount = isBig ? articles.length : Math.ceil(articles.length / itemsPerRow);

  const rowRender = ({ index, key, style }: ListRowProps) => {
    const items = [];
    const fromIndex = index * itemsPerRow;
    const toIndex = Math.min(fromIndex + itemsPerRow, articles.length);

    for (let i = fromIndex; i < toIndex; i++) {
      items.push(
        <ArticleListItem 
          article={articles[index]} 
          view={view}
          className={cls.card}
          target={target}
          key={articles[index].id}
        />
      )
      
    }

    return (
      <div 
        key={key}
        style={style}
        className={cls.row}
      >
        {items}
      </div>
    )
  }

  if (!isLoading && !articles.length) {
    return (
      <div className={classNames(cls.ArticleList, {}, [className, cls[view]]) }>
        <Text size={TextSize.L} title={t('Статьи не найдены')} />
      </div>
    )
  }

  return (
    <WindowScroller
      onScroll={() => console.log('scroll')}
      scrollElement={document.getElementById(PAGE_ID) as Element}
    >
      {({ height, width, registerChild, onChildScroll, isScrolling, scrollTop }) => (
        <div 
          ref={registerChild}
          className={classNames(cls.ArticleList, {}, [className, cls[view]]) }
        >
          {virtualized
            ? (
              <List
                height={height ?? 700}
                width={width ? width - 80 : 700}
                rowCount={rowCount}
                rowHeight={isBig ? 700 : 330}
                rowRenderer={rowRender}
                autoHeight
                onScroll={onChildScroll}
                isScrolling = {isScrolling}
                scrollTop={scrollTop}
              />
            )
            : (
              articles.map(item => (
                <ArticleListItem 
                  article={item}
                  view={view}
                  target={target}
                  key={item.id}
                  className={cls.card}
                />
              ))
            )
          }
          
          {isLoading && getSkeletons(view) }
        </div>
      )}
    </WindowScroller>
    // <div className={classNames(cls.ArticleList, {}, [className, cls[view]]) }>
    //   {articles.length > 0
    //     ? articles.map(renderArticle)
    //     : null}
    //   {isLoading && getSkeletons(view) }
    // </div>
    
  )
});
