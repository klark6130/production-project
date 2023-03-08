import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProfilePageHeader.module.scss';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getProfileReadonly, profileActions, updateProfileData } from 'entities/Profile';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';

interface ProfilePageHeaderProps {
  className?: string
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
  const { t } = useTranslation('profile');

  const readOnly = useSelector(getProfileReadonly);

  const dispatch = useAppDispatch();

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false))
  }, [dispatch])

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit())
  }, [dispatch])

  const onSave = useCallback(() => {
    dispatch(updateProfileData())
  }, [dispatch])

  return (
    <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
      <Text title={t('Профиль')} />
      {
        readOnly 
          ? (
            <Button 
              className={cls.editBtn} 
              theme={ButtonTheme.OUTLINE}
              onClick={onEdit}
            >
              { t('Редактировать')}
            </Button>)
          : (
            <>
              <Button 
                className={cls.editBtn} 
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
            </>)
      }
    </div>
  )
}
