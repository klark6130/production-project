/* eslint-disable i18next/no-literal-string */
import React, { useCallback, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginModal } from 'features/AuthByUsername';

interface NavbarProps {
  className?: string
}

const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false)

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false)
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true)
  }, []);

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <Button 
        theme={ButtonTheme.CLEAR_INVERTED} 
        className={cls.links}
        onClick={onShowModal}>
        {t('Войти')}
      </Button>
      <LoginModal 
        onClose={onCloseModal}
        isOpen = {isAuthModal}
      />
    </div>
  )
}

export { Navbar }
