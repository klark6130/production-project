import { useTheme } from 'app/providers/ThemeProvider'
import { ReactNode, memo } from 'react'
import cls from './Drawer.module.scss';
import { Mods, classNames } from 'shared/lib/classNames/classNames';
import { Portal } from '../Portal/Portal';
import { Overlay } from '../Overlay/Overlay';
import { useModal } from 'shared/lib/hooks/useModal';

interface DrawerProps {
  className?: string
  children: ReactNode
  isOpen?: boolean
  onClose?: () => void
  lazy?: boolean
}

export const Drawer = memo((props: DrawerProps) => {
  const {
    children,
    className,
    isOpen,
    onClose,
    lazy
  } = props;

  const { close, isClosing, isMounted } = useModal({
    animationDelay: 300,
    onClose,
    isOpen
  });

  const { theme } = useTheme();

  const mods: Mods = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing
  }

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div
        className={classNames(cls.Drawer, mods, [className, theme, 'app_drawer'])}
      >
        <Overlay onClick={close} />
        <div className={cls.content}>
          {children}
        </div>
      </div>
    </Portal>
  )
})