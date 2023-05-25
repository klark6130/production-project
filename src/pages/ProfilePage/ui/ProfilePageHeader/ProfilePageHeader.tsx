import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getProfileData, getProfileReadonly, profileActions, updateProfileData } from 'entities/Profile';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useParams } from 'react-router-dom';
import { getUserAuthData } from 'entities/User';
import { HStack } from 'shared/ui/Stack/HStack/HStack';

interface ProfilePageHeaderProps {
  className?: string
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
  const { t } = useTranslation('profile');
  const { id } = useParams<{ id: string }>();

  const authData = useSelector(getUserAuthData);
  const profileData = useSelector(getProfileData);

  const canEdit = authData?.id === profileData?.id

  const readOnly = useSelector(getProfileReadonly);

  const dispatch = useAppDispatch();

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false))
  }, [dispatch])

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit())
  }, [dispatch])

  const onSave = useCallback(() => {
    if (id) {
      dispatch(updateProfileData())
    }
  }, [dispatch, id])

  return (
    <HStack max justify={'between'} className={classNames('', {}, [className])}>
      <Text title={t('Профиль')} />
      
      {canEdit && (
        <>
          {readOnly 
            ? (
              <Button 
                theme={ButtonTheme.OUTLINE}
                onClick={onEdit}
              >
                { t('Редактировать')}
              </Button>)
            : (
              <HStack gap='8'>
                <Button 
                  theme={ButtonTheme.OUTLINE_RED}
                  onClick={onCancelEdit}
                >
                  { t('Отменить')}
                </Button>
                <Button 
                  theme={ButtonTheme.OUTLINE}
                  onClick={onSave}
                >
                  { t('Сохранить')}
                </Button>
              </HStack>)
          }
        </>
      )}
      
    </HStack>
  )
}
