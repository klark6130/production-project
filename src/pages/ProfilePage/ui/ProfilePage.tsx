import { profileReducer } from 'entities/Profile';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const reducers: ReducerList = {
  profile: profileReducer
}

interface ProfilePageProps {
  className?: string
} 
const ProfilePage = memo(({ className }: ProfilePageProps) => {
  const { t } = useTranslation();

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames('', {}, [className])}>  
        {
          t('ProfilePage')
        }
      </div>
    </DynamicModuleLoader>
  )
})

export default ProfilePage;