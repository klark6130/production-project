import { classNames } from '@/shared/lib/classNames/classNames';
import './Loader.scss';

interface LoaderProps {
    className?: string;
}

/**
 * Устарел, использовать новые компоненты из папки redesigned
 * @deprecated
 */
export const Loader = ({ className }: LoaderProps) => {
    return (
        <div
            role="loader"
            className={classNames('lds-hourglass', {}, [className, 'loader'])}
        >
            <span style={{ display: 'none' }}>Loading...</span>
        </div>
    );
};
