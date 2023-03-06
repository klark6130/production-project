import { DetailedHTMLProps, HTMLInputTypeAttribute, InputHTMLAttributes, LegacyRef, MutableRefObject, ReactHTMLElement, memo, useEffect, useRef, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

// исключение полей интерфейса при расширении!!!
type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
  className?: string
  value?: string
  onChange?: (value: string) => void
  autofocus?: boolean
} 
// eslint-disable-next-line react/display-name
export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    autofocus,
    ...otherProps
  } = props;

  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (autofocus) {
      ref.current?.focus();
    }
  }, [autofocus]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  }
  return (
    <div className={classNames(cls.InputWrapper, {}, [className])}>
      {placeholder && 
        <div className={cls.placeholder}>
          {placeholder + '>'}
        </div>
      }
      <input 
        ref={ref}
        type={type}
        value = {value}
        onChange = {onChangeHandler}
        className = {cls.input}
        {...otherProps}
      />
    </div>
  )
});
