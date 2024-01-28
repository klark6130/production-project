import {
    DetailedHTMLProps,
    InputHTMLAttributes,
    KeyboardEventHandler,
    memo,
    useEffect,
    useRef,
} from 'react';
import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import cls from './Input.module.scss';

// исключение полей интерфейса при расширении!!!
type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange' | 'readOnly'
>;

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    onPressEnter?: () => void;
    autofocus?: boolean;
    readonly?: boolean;
}
// eslint-disable-next-line react/display-name
/**
 * Устарел, использовать новые компоненты из папки redesigned
 * @deprecated
 */
export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        onPressEnter,
        type = 'text',
        placeholder,
        autofocus,
        readonly,
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
    };

    const onKeyDown = (
        e: DetailedHTMLProps<
            InputHTMLAttributes<HTMLInputElement>,
            HTMLInputElement
        >,
    ) => {
        console.log('e', e);
        if (e.key === 'Enter') {
            onPressEnter?.();
        }
    };

    const mods: Mods = {
        [cls.readonly]: readonly,
    };

    return (
        <div className={classNames(cls.InputWrapper, mods, [className])}>
            {placeholder && (
                <div className={cls.placeholder}>{placeholder + '>'}</div>
            )}
            <input
                ref={ref}
                type={type}
                value={value}
                onChange={onChangeHandler}
                onKeyDown={onKeyDown}
                className={cls.input}
                readOnly={readonly}
                {...otherProps}
            />
        </div>
    );
});
