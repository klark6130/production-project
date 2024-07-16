import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Country } from '../../model/types/country';
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups';
import { ToggleFeatures } from '@/shared/lib/features';
import { ListBoxProps as ListBoxPropsDeprecated } from '@/shared/ui/deprecated/Popups/ui/ListBox/ListBox';
import {
    ListBox,
    ListBoxProps,
} from '@/shared/ui/redesigned/Popups/ui/ListBox/ListBox';
import { Currency } from '@/entities/Currency';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}

const options = [
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.China, content: Country.China },
    { value: Country.Kazakhstan, content: Country.Kazakhstan },
];

export const CountrySelect = memo(
    ({ className, value, onChange, readonly }: CountrySelectProps) => {
        const { t } = useTranslation();

        const onChangeHandler = useCallback(
            (value: string) => {
                if (onChange) {
                    onChange(value as Country);
                }
            },
            [onChange],
        );

        const props: ListBoxPropsDeprecated | ListBoxProps<Currency> = {
            className: classNames('', {}, [className]),
            defaultValue: t('Страна'),
            label: t('Страна'),
            items: options,
            value,
            onChange: onChangeHandler,
            readonly,
            direction: 'top right',
        };

        return (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={<ListBox {...props} />}
                off={<ListBoxDeprecated {...props} />}
            />
        );
    },
);
