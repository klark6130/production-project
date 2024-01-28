import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Country } from '../../model/types/country';
import { ListBox } from '@/shared/ui/deprecated/Popups';

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

        return (
            <ListBox
                className={classNames('', {}, [className])}
                defaultValue={t('Страна')}
                label={t('Страна')}
                items={options}
                value={value}
                onChange={onChangeHandler}
                readonly={readonly}
                direction="top right"
            />
        );
    },
);
