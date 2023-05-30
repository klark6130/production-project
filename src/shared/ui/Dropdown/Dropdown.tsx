import { Menu } from '@headlessui/react';

import cls from './Dropdown.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Fragment, ReactNode } from 'react';
import { DropdownDirection } from 'shared/types/ui';
import { AppLink } from '../AppLink/AppLink';

export interface DropdownItem {
  disabled?: boolean
  content?: ReactNode
  onClick?: () => void
  href?: string
}

interface DropdownProps {
  className?: string
  items: DropdownItem[]
  trigger: ReactNode
  direction?: DropdownDirection
}

const mapDirectionsClass: Record<DropdownDirection, string> = {
  'top left': cls.optionsTopLeft,
  'bottom left': cls.optionsBottomLeft,
  'top right': cls.optionsTopRight,
  'bottom right': cls.optionsBottomRight
}

export function Dropdown (props: DropdownProps) {
  const { className, items, trigger, direction = 'bottom right' } = props;

  const menuClasses = [mapDirectionsClass[direction]];

  return (
    <Menu as="div" className={classNames(cls.Dropdown, {}, [className])}>
      <Menu.Button className={cls.btn}>
        {trigger}
      </Menu.Button>
      <Menu.Items className={classNames(cls.menu, {}, menuClasses)}>
        {items.map(item => {
          const content = ({ active }: { active: boolean }) => (
            <button
              disabled={item.disabled}
              type='button'
              className={classNames(cls.item, { [cls.active]: active })}
              onClick={item.onClick}
            >
              {item.content}
            </button>
          );

          if (item.href) {
            return (
              <Menu.Item as={AppLink} to={item.href} key={String(item.content)} disabled={item.disabled}>
                {content}
              </Menu.Item>
            )
          }

          return (
            <Menu.Item as={Fragment} key={String(item.content)} disabled={item.disabled}>
              {content}
            </Menu.Item>
          )
        })
        }  
        
      </Menu.Items>
    </Menu>
  )
}