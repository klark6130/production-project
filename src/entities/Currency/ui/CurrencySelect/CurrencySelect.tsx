import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Currency } from '../../model/types/currency';
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups';
import { ToggleFeatures } from '@/shared/lib/features';
import { ListBox } from '@/shared/ui/redesigned/Popups';
import { ListBoxProps as ListBoxPropsDeprecated } from '@/shared/ui/deprecated/Popups/ui/ListBox/ListBox';
import { ListBoxProps } from '@/shared/ui/redesigned/Popups/ui/ListBox/ListBox';

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    readonly?: boolean;
}

const options = [
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.USD, content: Currency.USD },
];

export const CurrencySelect = memo(
    ({ className, value, onChange, readonly }: CurrencySelectProps) => {
        const { t } = useTranslation();

        const onChangeHandler = useCallback(
            (value: string) => {
                if (onChange) {
                    onChange(value as Currency);
                }
            },
            [onChange],
        );

        const props: ListBoxPropsDeprecated | ListBoxProps<Currency> = {
            onChange: onChangeHandler,
            items: options,
            value,
            defaultValue: t('Валюта'),
            className,
            readonly,
            label: t('Валюта'),
            direction: 'top right',
        };

        return (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={<ListBox {...props} />}
                off={<ListBoxDeprecated {...props} />}
            ></ToggleFeatures>
        );
    },
);
