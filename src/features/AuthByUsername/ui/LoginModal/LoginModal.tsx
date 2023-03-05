import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import cls from './LoginModal.module.scss';
import { Suspense, memo } from 'react';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';
import { Loader } from 'shared/ui/Loader/Loader';

interface LoginModalProps {
  className?: string
  isOpen: boolean
  onClose: () => void

} 
export const LoginModal = memo(({ className, isOpen, onClose }: LoginModalProps) => {
  return (
    <Modal 
      className={classNames(cls.LoginModal, {}, [className])}
      isOpen = {isOpen}
      onClose = {onClose}
      lazy = {true}
    >  
      <Suspense fallback={<Loader/>}>
        <LoginFormAsync onSuccess={onClose}/>
      </Suspense>
    </Modal>
  )
})
