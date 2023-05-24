/* eslint-disable i18next/no-literal-string */
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { memo, useMemo, useState } from 'react';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { useSelector } from 'react-redux';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher';

interface SidebarProps {
  className?: string
}
export const Sidebar = memo(({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const sidebarItemList = useSelector(getSidebarItems);

  const onToggle = () => {
    setCollapsed(prev => !prev);
  }

  const itemsList = useMemo(() => {
    return sidebarItemList.map(item => (
      <SidebarItem 
        item={item}
        key={item.path}
        collapsed={collapsed}/>
    ))
  }, [sidebarItemList, collapsed])

  return (
    <menu
      data-testid='sidebar'
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
    >
      <Button 
        data-testid="sidebar-toggle" 
        onClick={onToggle}
        className={cls.collapseBtn}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        square = {true}
        size={ButtonSize.L}
      >
        { collapsed ? '>' : '<'}
      </Button>

      <div className={cls.items}>
        { itemsList }
      </div>
      
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher 
          short={collapsed}
          className={cls.lang}
        />
      </div>
    </menu>
  )
})
