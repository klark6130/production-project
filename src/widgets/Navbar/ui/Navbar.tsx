/* eslint-disable i18next/no-literal-string */
import React, { useCallback, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';

interface NavbarProps {
  className?: string
}

const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false)

  const onToggleModal = useCallback(() => {
    setIsAuthModal(prev => !prev)
  }, []);

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <Button 
        theme={ButtonTheme.CLEAR_INVERTED} 
        className={cls.links}
        onClick={onToggleModal}>
        {t('Войти')}
      </Button>
      <Modal isOpen={isAuthModal} onClose={onToggleModal} >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo qui in repudiandae 
        porro ullam illum perspiciatis aliquam cumque ea, magni iusto eos quibusdam! Ipsa harum, quia in aperiam voluptatum quae.
      </Modal>
    </div>
  )
}

export { Navbar }
