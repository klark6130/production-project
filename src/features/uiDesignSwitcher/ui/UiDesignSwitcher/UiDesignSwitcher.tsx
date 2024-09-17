import { getUserAuthData } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import { getFeatureFlag } from '@/shared/lib/features';
import { updateFeatureFlag } from '@/shared/lib/features/services/updateFeatureFlags';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { ListBox } from '@/shared/ui/redesigned/Popups';
import { ListBoxItem } from '@/shared/ui/redesigned/Popups/ui/ListBox/ListBox';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';
import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';

interface UiDesignSwitcherProps {
    className?: string;
}

export const UiDesignSwitcher = memo(({ className }: UiDesignSwitcherProps) => {
    const { t } = useTranslation('UiDesignSwitcher');

    const isAppRedesigned = getFeatureFlag('isAppRedesigned');
    const authData = useSelector(getUserAuthData);

    const [isLoading, setIsLoading] = useState(false);

    const dispatch = useAppDispatch();

    const items: Array<ListBoxItem<'new' | 'old'>> = [
        {
            content: t('Новый'),
            value: 'new',
        },
        {
            content: t('Старый'),
            value: 'old',
        },
    ];

    const onChange = async (value: 'new' | 'old') => {
        if (authData) {
            setIsLoading(true);
            await dispatch(
                updateFeatureFlag({
                    newFeatures: { isAppRedesigned: value === 'new' },
                    userId: authData.id,
                }),
            ).unwrap();
            setIsLoading(false);
        }
    };

    return (
        <HStack>
            <Text text={t('Вариант интерфейса')} />
            {isLoading ? (
                <Skeleton width={100} height={40} />
            ) : (
                <ListBox
                    // eslint-disable-next-line @typescript-eslint/no-misused-promises
                    onChange={onChange}
                    items={items}
                    value={isAppRedesigned ? 'new' : 'old'}
                    className={classNames('', {}, [className])}
                ></ListBox>
            )}
        </HStack>
    );
});
