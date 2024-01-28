import { Popover as HPopover } from '@headlessui/react';
import { ReactNode } from 'react';
import { DropdownDirection } from '@/shared/types/ui';
import { mapDirectionsClass } from '../../styles/consts';
import cls from './Popover.module.scss';
import popupCls from '../../styles/popup.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

interface PopoverProps {
    className?: string;
    children?: ReactNode;
    trigger: ReactNode;
    direction?: DropdownDirection;
}

/**
 * Устарел, использовать новые компоненты из папки redesigned
 * @deprecated
 */
export function Popover(props: PopoverProps) {
    const { className, children, trigger, direction = 'bottom right' } = props;

    const menuClasses = [mapDirectionsClass[direction]];

    return (
        <HPopover
            className={classNames(cls.Popover, {}, [className, popupCls.popup])}
        >
            <HPopover.Button as={'div'} className={popupCls.trigger}>
                {trigger}
            </HPopover.Button>

            <HPopover.Panel className={classNames(cls.panel, {}, menuClasses)}>
                {children}
            </HPopover.Panel>
        </HPopover>
    );
}
