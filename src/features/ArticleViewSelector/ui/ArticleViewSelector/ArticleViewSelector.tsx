import { ArticleView } from '@/entities/Article';
import ListIconDeprecated from '@/shared/assets/icons/list-24-24.svg';
import TileIconDeprecated from '@/shared/assets/icons/tiled-24-24.svg';

import ListIcon from '@/shared/assets/icons/burger.svg';
import TiledIcon from '@/shared/assets/icons/tile.svg';

import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { toggleFeatures } from '@/shared/lib/features/toggleFeatures';
import {
    ButtonTheme,
    Button as DeprecatedButton,
} from '@/shared/ui/deprecated/Button';
import { Icon as DeprecatedIcon } from '@/shared/ui/deprecated/Icon';
import { Card } from '@/shared/ui/redesigned/Card';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { memo } from 'react';
import cls from './ArticleViewSelector.module.scss';

interface ArticleViewSelectorProps {
    className?: string;
    view: ArticleView;
    onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
    {
        view: ArticleView.LIST,
        icon: toggleFeatures({
            name: 'isAppRedesigned',
            on: () => ListIcon,
            off: () => ListIconDeprecated,
        }),
    },
    {
        view: ArticleView.TILE,
        icon: toggleFeatures({
            name: 'isAppRedesigned',
            on: () => TiledIcon,
            off: () => TileIconDeprecated,
        }),
    },
];

export const ArticleViewSelector = memo(
    ({ className, view, onViewClick }: ArticleViewSelectorProps) => {
        const onClick = (newView: ArticleView) => () => {
            onViewClick?.(newView);
        };

        return (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <Card
                        border="round"
                        className={classNames(
                            cls.ArticleViewSelectorRedesigned,
                            {},
                            [className],
                        )}
                    >
                        <HStack gap="8">
                            {viewTypes.map((viewType) => (
                                <Icon
                                    clickable
                                    onClick={onClick(viewType.view)}
                                    key={viewType.view}
                                    Svg={viewType.icon}
                                    className={classNames('', {
                                        [cls.notSelected]:
                                            viewType.view !== view,
                                    })}
                                />
                            ))}
                        </HStack>
                    </Card>
                }
                off={
                    <div
                        className={classNames(cls.ArticleViewSelector, {}, [
                            className,
                        ])}
                    >
                        {viewTypes.map((viewType) => (
                            <DeprecatedButton
                                key={viewType.view}
                                theme={ButtonTheme.CLEAR}
                                onClick={onClick(viewType.view)}
                            >
                                <DeprecatedIcon
                                    width={24}
                                    height={24}
                                    Svg={viewType.icon}
                                    className={classNames('', {
                                        [cls.notSelected]:
                                            viewType.view !== view,
                                    })}
                                />
                            </DeprecatedButton>
                        ))}
                    </div>
                }
            />
        );
    },
);
