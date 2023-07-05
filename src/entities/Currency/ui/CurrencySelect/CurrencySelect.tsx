import { memo, useCallback } from 'react';
import { Currency } from '../../model/types/currency';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Select } from '@/shared/ui/Select/Select';
import { ListBox } from '@/shared/ui/Popups';

interface CurrencySelectProps {
  className?: string
  value?: Currency
  onChange?: (value: Currency) => void
  readonly?: boolean
} 

const options = [
  { value: Currency.RUB, content: Currency.RUB },
  { value: Currency.EUR, content: Currency.EUR },
  { value: Currency.USD, content: Currency.USD }
];

export const CurrencySelect = memo(({ className, value, onChange, readonly }: CurrencySelectProps) => {
  const { t } = useTranslation();

  const onChangeHandler = useCallback((value: string) => {
    if (onChange) {
      onChange(value as Currency)
    }
  }, [onChange])

  return (
    <ListBox 
      onChange={onChangeHandler}
      items={options}
      value={value}
      defaultValue={t('Валюта')}
      className={className}
      readonly={readonly}
      label={t('Валюта')}
      direction='top right'
    />
  )
  // return (
  //   <Select 
  //     className={classNames('', {}, [className])} 
  //     label={t('Валюта')}
  //     options={options}
  //     value={value}
  //     onChange={onChangeHandler}
  //     readonly={readonly}
  //   />
  // )
})
