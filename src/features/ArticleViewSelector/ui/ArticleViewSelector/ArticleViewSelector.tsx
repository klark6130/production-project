import ListIcon from '@/shared/assets/icons/list.svg';
import TileIcon from '@/shared/assets/icons/tile.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import { memo } from 'react';
import cls from './ArticleViewSelector.module.scss';
import { ArticleView } from '@/entities/Article';

interface ArticleViewSelectorProps {
    className?: string;
    view: ArticleView;
    onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
    {
        view: ArticleView.LIST,
        icon: ListIcon,
    },
    {
        view: ArticleView.TILE,
        icon: TileIcon,
    },
];

export const ArticleViewSelector = memo(
    ({ className, view, onViewClick }: ArticleViewSelectorProps) => {
        const onClick = (newView: ArticleView) => () => {
            onViewClick?.(newView);
        };

        return (
            <div
                className={classNames(cls.ArticleViewSelector, {}, [className])}
            >
                {viewTypes.map((viewType) => (
                    <Button
                        key={viewType.view}
                        theme={ButtonTheme.CLEAR}
                        onClick={onClick(viewType.view)}
                    >
                        <Icon
                            width={24}
                            height={24}
                            Svg={viewType.icon}
                            className={classNames('', {
                                [cls.notSelected]: viewType.view !== view,
                            })}
                        />
                    </Button>
                ))}
            </div>
        );
    },
);
