import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, useState } from 'react';
import cls from './StarRating.module.scss';
import { Icon as IconDeprecated } from '../Icon/Icon';
import StarIcon from '@/shared/assets/icons/star.svg';
import { ToggleFeatures } from '@/shared/lib/features';
import { Icon } from '../../redesigned/Icon';
import { toggleFeatures } from '@/shared/lib/features/lib/toggleFeatures';

interface StarRatingProps {
    className?: string;
    onSelect?: (starsCount: number) => void;
    size?: number;
    selectedStars?: number;
}

const stars = [1, 2, 3, 4, 5];

/**
 * Устарел, использовать новые компоненты из папки redesigned
 * @deprecated
 */
export const StarRating = memo(
    ({
        className,
        onSelect,
        selectedStars = 0,
        size = 30,
    }: StarRatingProps) => {
        const { t } = useTranslation();

        const [currentStarsCount, setCurrentStartCount] =
            useState(selectedStars);
        const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

        const onHover = (starsCount: number) => () => {
            if (!isSelected) {
                setCurrentStartCount(starsCount);
            }
        };

        const onLeave = () => {
            if (!isSelected) {
                setCurrentStartCount(0);
            }
        };

        const onClick = (starsCount: number) => () => {
            if (!isSelected) {
                onSelect?.(starsCount);
                setCurrentStartCount(starsCount);
                setIsSelected(true);
            }
        };

        return (
            <div
                className={classNames(
                    toggleFeatures({
                        name: 'isAppRedesigned',
                        on: () => cls.StarRatingRedesigned,
                        off: () => cls.StarRating,
                    }),
                    {},
                    [className],
                )}
            >
                {stars.map((starNumber) => {
                    const commonProps = {
                        className: classNames(
                            cls.starIcon,
                            { [cls.selected]: isSelected },
                            [
                                currentStarsCount >= starNumber
                                    ? cls.hovered
                                    : cls.normal,
                            ],
                        ),
                        Svg: StarIcon,
                        key: starNumber,
                        width: size,
                        height: size,
                        onMouseLeave: onLeave,
                        onMouseEnter: onHover(starNumber),
                        onClick: onClick(starNumber),
                        'data-testid': `StarRating.${starNumber}`,
                        'data-selected': currentStarsCount >= starNumber,
                    };

                    return (
                        <ToggleFeatures
                            key={starNumber}
                            feature="isAppRedesigned"
                            on={
                                <Icon
                                    clickable={!isSelected}
                                    {...commonProps}
                                    key={starNumber}
                                />
                            }
                            off={<IconDeprecated {...commonProps} />}
                        />
                    );
                })}
            </div>
        );
    },
);
