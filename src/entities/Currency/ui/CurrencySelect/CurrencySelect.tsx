import { ListBox } from '@/shared/ui/Popups';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Currency } from '../../model/types/currency';

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
