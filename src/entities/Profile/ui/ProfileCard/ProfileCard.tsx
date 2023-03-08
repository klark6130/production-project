import { useTranslation } from 'react-i18next';
import { Mods, classNames } from 'shared/lib/classNames/classNames';
import cls from './ProfileCard.module.scss';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Profile } from '../../model/types/profile';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Currency, CurrencySelect } from 'entities/Currency';
import { Country, CountrySelect } from 'entities/Country';

interface ProfileCardProps {
  className?: string
  data?: Profile
  error?: string
  isLoading?: boolean
  readonly?: boolean
  onChangeFirstname?: (value?: string) => void
  onChangeLastname?: (value?: string) => void
  onChangeCity?: (value?: string) => void
  onChangeAge?: (value?: string) => void
  onChangeUsername?: (value?: string) => void
  onChangeAvatar?: (value?: string) => void
  onChangeCurrency?: (currency: Currency) => void
  onChangeCountry?: (country: Country) => void
} 
export const ProfileCard = (props: ProfileCardProps) => {
  const { className, data, error, isLoading, readonly, onChangeFirstname, onChangeLastname, onChangeAge, onChangeCity, onChangeAvatar, onChangeUsername, onChangeCountry, onChangeCurrency } = props;
  const { t } = useTranslation('profile');

  if (isLoading) {
    return (
      <div className={classNames(cls.ProfileCard, {}, [className, cls.loading])}> 
        <Loader />
      </div>
    )
  }

  if (error) {
    return (
      <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
        <Text 
          theme={TextTheme.ERROR} 
          title={t('Ошибка при загрузке профиля')}
          text={t('Попробуйте обновить страницу')}
          align={TextAlign.CENTER}/>
      </div> 
    )
  }

  const mods: Mods = {
    [cls.editing]: !readonly
  }

  return (
    <div className={classNames(cls.ProfileCard, mods, [className])}> 
      <div className={cls.data}>
        { data?.avatar && (
          <div className={cls.avatarWrapper}>
            <Avatar src={data?.avatar} />
          </div>
        )}
        <Input 
          className={cls.input} 
          value={data?.first} 
          placeholder={t('Ваше имя')} 
          onChange={onChangeFirstname}
          readonly={readonly}
        />
        <Input 
          className={cls.input} 
          value={data?.lastname} 
          placeholder={t('Ваша фамилия')} 
          onChange={onChangeLastname}
          readonly={readonly}
        />
        <Input 
          className={cls.input} 
          value={data?.age} 
          placeholder={t('Ваша возраст')} 
          onChange={onChangeAge}
          readonly={readonly}
        />
        <Input 
          className={cls.input} 
          value={data?.city} 
          placeholder={t('Ваш город')} 
          onChange={onChangeCity}
          readonly={readonly}
        />
        <Input 
          className={cls.input} 
          value={data?.username} 
          placeholder={t('Имя пользователя')} 
          onChange={onChangeUsername}
          readonly={readonly}
        />
        <Input 
          className={cls.input} 
          value={data?.avatar} 
          placeholder={t('Ссылка на аватар')} 
          onChange={onChangeAvatar}
          readonly={readonly}
        />
        <CurrencySelect 
          className={cls.input}
          value={data?.currency}
          readonly={readonly}
          onChange={onChangeCurrency}
        />
        <CountrySelect 
          className={cls.input}
          value={data?.country}
          readonly={readonly}
          onChange={onChangeCountry}
        />
      </div>
    </div>
  )
}
