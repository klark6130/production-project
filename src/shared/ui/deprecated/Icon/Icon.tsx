import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Icon.module.scss';
import { memo } from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
    className?: string;
    Svg: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    inverted?: boolean;
}

/**
 * Устарел, использовать новые компоненты из папки redesigned
 * @deprecated
 */
export const Icon = memo(
    ({ className, Svg, inverted, ...othersProps }: IconProps) => {
        return (
            <Svg
                className={classNames(inverted ? cls.inverted : cls.Icon, {}, [
                    className,
                ])}
                {...othersProps}
            ></Svg>
        );
    },
);
