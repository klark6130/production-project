import { Fragment, ReactNode, useState } from 'react'
import { Listbox as HListBox } from '@headlessui/react'
import cls from './ListBox.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '../../../Button/Button';
import { DropdownDirection } from '@/shared/types/ui';
import { HStack } from '../../../Stack/HStack/HStack'
import { mapDirectionsClass } from '../../styles/consts';
import popupCls from '../../styles/popup.module.scss';

export interface ListBoxItem {
  value: string
  content: ReactNode
  disabled?: boolean
}

interface ListBoxProps {
  items?: ListBoxItem[]
  className?: string
  value?: string
  defaultValue?: string
  onChange: <T extends string>(value: T) => void
  readonly: boolean | undefined
  direction?: DropdownDirection
  label?: string
}

export function ListBox (props: ListBoxProps) {
  const { className, items, value, defaultValue, onChange, readonly, direction = 'bottom left', label } = props;

  const optionsClasses = [mapDirectionsClass[direction]];

  return (
    <HStack gap='4'>
      {label && <span>{label}</span>}
      <HListBox
        disabled={readonly}
        as={'div'} 
        className={classNames(cls.ListBox, {}, [className, popupCls.popup])}
        value={value} 
        onChange={onChange}
      >
      
        <HListBox.Button className={cls.trigger}
        >
          <Button disabled={readonly}>
            {value ?? defaultValue}
          </Button>
        
        </HListBox.Button>
        <HListBox.Options className={classNames(cls.options, {}, optionsClasses)}>
          {items?.map((item) => (
            <HListBox.Option
              key={item.value}
              value={item.value}
              disabled={item.disabled}
              as={Fragment}
            >
              { ({ active, selected }) => (
                <li 
                  className={classNames(cls.item, { [popupCls.active]: active, [popupCls.disabled]: item.disabled })}
                >
                  { item.content }
                </li>
              )}
            </HListBox.Option>
          ))}
        </HListBox.Options>
      </HListBox>
    </HStack>
  )
}