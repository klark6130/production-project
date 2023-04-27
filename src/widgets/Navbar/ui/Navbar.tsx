/* eslint-disable i18next/no-literal-string */
import React, { memo, useCallback, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';

interface NavbarProps {
  className?: string
}

const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false)
  const authData = useSelector(getUserAuthData);
  const dispatch = useDispatch();
  const onCloseModal = useCallback(() => {
    setIsAuthModal(false)
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true)
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (authData) {
    return (
      <header className={classNames(cls.navbar, {}, [className])}>
        <Button 
          theme={ButtonTheme.CLEAR_INVERTED} 
          className={cls.links}
          onClick={onLogout}>
          {t('Выйти')}
        </Button>
      </header>
    );
  }

  return (
    <header className={classNames(cls.navbar, {}, [className])}>
      <Button 
        theme={ButtonTheme.CLEAR_INVERTED} 
        className={cls.links}
        onClick={onShowModal}>
        {t('Войти')}
      </Button>
      {isAuthModal && <LoginModal 
        onClose={onCloseModal}
        isOpen = {isAuthModal}
      />}
    </header>
  )
});

export { Navbar }
