import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './NotificationItem.module.scss';
import { Notification } from '../../model/types/notification';
import { Card as DepracatedCard, CardTheme } from '@/shared/ui/deprecated/Card';
import { Text as DepracatedText } from '@/shared/ui/deprecated/Text';
import { ToggleFeatures } from '@/shared/lib/features';
import { Card } from '@/shared/ui/redesigned/Card';
import { Text } from '@/shared/ui/redesigned/Text';

interface NotificationItemProps {
    className?: string;
    item: Notification;
}
export const NotificationItem = memo(
    ({ className, item }: NotificationItemProps) => {
        const { t } = useTranslation();

        const content = (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <Card
                        className={classNames(cls.NotificationItem, {}, [
                            className,
                        ])}
                    >
                        <Text title={item.title} text={item.description} />
                    </Card>
                }
                off={
                    <DepracatedCard
                        theme={CardTheme.OUTLINED}
                        className={classNames(cls.NotificationItem, {}, [
                            className,
                        ])}
                    >
                        <DepracatedText
                            title={item.title}
                            text={item.description}
                        />
                    </DepracatedCard>
                }
            />
        );

        if (item.href) {
            return (
                <a
                    className={cls.link}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                >
                    {content}
                </a>
            );
        }

        return content;
    },
);
