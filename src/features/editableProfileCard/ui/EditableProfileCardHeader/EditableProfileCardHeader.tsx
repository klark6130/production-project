import { getUserAuthData } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
    getProfileData,
    getProfileReadonly,
} from '../../model/selectors/getProfileData';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { profileActions } from '../../model/slice/profileSlice';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text } from '@/shared/ui/redesigned/Text';
import { Button } from '@/shared/ui/redesigned/Button';
import { Card } from '@/shared/ui/redesigned/Card';

interface EditableProfileCardHeaderProps {
    className?: string;
}

export const EditableProfileCardHeader = memo(
    ({ className }: EditableProfileCardHeaderProps) => {
        const { t } = useTranslation('profile');
        const { id } = useParams<{ id: string }>();

        const authData = useSelector(getUserAuthData);
        const profileData = useSelector(getProfileData);

        const canEdit = authData?.id === profileData?.id;

        const readOnly = useSelector(getProfileReadonly);

        const dispatch = useAppDispatch();

        const onEdit = useCallback(() => {
            dispatch(profileActions.setReadonly(false));
        }, [dispatch]);

        const onCancelEdit = useCallback(() => {
            dispatch(profileActions.cancelEdit());
        }, [dispatch]);

        const onSave = useCallback(() => {
            if (id) {
                dispatch(updateProfileData());
            }
        }, [dispatch, id]);

        return (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <Card padding="16" max>
                        <HStack
                            max
                            justify={'between'}
                            className={classNames('', {}, [className])}
                        >
                            <Text title={t('Профиль')} />

                            {canEdit && (
                                <>
                                    {readOnly ? (
                                        <Button
                                            variant="outline"
                                            onClick={onEdit}
                                            data-testid={
                                                'EditableProfileCardHeader.EditButton'
                                            }
                                        >
                                            {t('Редактировать')}
                                        </Button>
                                    ) : (
                                        <HStack gap="8" wrap="wrap">
                                            <Button
                                                variant="outline"
                                                onClick={onCancelEdit}
                                                color="error"
                                                data-testid={
                                                    'EditableProfileCardHeader.CancelButton'
                                                }
                                            >
                                                {t('Отменить')}
                                            </Button>
                                            <Button
                                                variant="outline"
                                                color="success"
                                                onClick={onSave}
                                                data-testid={
                                                    'EditableProfileCardHeader.SaveButton'
                                                }
                                            >
                                                {t('Сохранить')}
                                            </Button>
                                        </HStack>
                                    )}
                                </>
                            )}
                        </HStack>
                    </Card>
                }
                off={
                    <HStack
                        max
                        justify={'between'}
                        className={classNames('', {}, [className])}
                    >
                        <TextDeprecated title={t('Профиль')} />

                        {canEdit && (
                            <>
                                {readOnly ? (
                                    <ButtonDeprecated
                                        theme={ButtonTheme.OUTLINE}
                                        onClick={onEdit}
                                        data-testid={
                                            'EditableProfileCardHeader.EditButton'
                                        }
                                    >
                                        {t('Редактировать')}
                                    </ButtonDeprecated>
                                ) : (
                                    <HStack gap="8" wrap="wrap">
                                        <ButtonDeprecated
                                            theme={ButtonTheme.OUTLINE_RED}
                                            onClick={onCancelEdit}
                                            data-testid={
                                                'EditableProfileCardHeader.CancelButton'
                                            }
                                        >
                                            {t('Отменить')}
                                        </ButtonDeprecated>
                                        <ButtonDeprecated
                                            theme={ButtonTheme.OUTLINE}
                                            onClick={onSave}
                                            data-testid={
                                                'EditableProfileCardHeader.SaveButton'
                                            }
                                        >
                                            {t('Сохранить')}
                                        </ButtonDeprecated>
                                    </HStack>
                                )}
                            </>
                        )}
                    </HStack>
                }
            />
        );
    },
);
