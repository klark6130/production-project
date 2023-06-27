import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './NotificationButton.module.scss';
import { Popover } from 'shared/ui/Popups';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import { NotificationList } from 'entities/Notification';
import Notification from 'shared/assets/icons/notification.svg';

interface NotificationButtonProps {
  className?: string
} 
export const NotificationButton = memo(({ className }: NotificationButtonProps) => {

  return (
    <Popover
      className={classNames(cls.NotificationButton, {}, [className]) }
      direction='bottom left'
      trigger={(
        <Button theme={ButtonTheme.CLEAR}>
          <Icon Svg={Notification} inverted/>
        </Button>)}>
      <NotificationList className={cls.notifications} />
    </Popover>
  )
});
