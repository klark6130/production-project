import { ArticleType } from '../../model/consts/articleConsts';
import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { TabItem, Tabs } from '@/shared/ui/Tabs/Tabs';

interface ArticleTypeTabsProps {
  className?: string
  value: ArticleType
  onChangeType: (type: ArticleType) => void
} 

export const ArticleTypeTabs = memo(({ className, value, onChangeType }: ArticleTypeTabsProps) => {
  const { t } = useTranslation();

  const tabs = useMemo<TabItem[]>(() => {
    return Object.entries(ArticleType).map(([key, value]) => {
      return {
        value,
        content: t(value)
      }
    })
  
  }, [t]);

  const onTabClick = useCallback((tab: TabItem) => {
    onChangeType(tab.value as ArticleType)
  }, [onChangeType]);

  return (
    <Tabs 
      className={classNames('', {}, [className]) }
      tabs={tabs}
      value={value}
      onTabClick={onTabClick}
    />
  )
});
