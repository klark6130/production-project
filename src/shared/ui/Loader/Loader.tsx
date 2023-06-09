import { classNames } from 'shared/lib/classNames/classNames';
import './Loader.scss';

interface LoaderProps {
  className?: string
}

export const Loader = ({ className }: LoaderProps) => {
  return (
    <div role="loader" className={classNames('lds-hourglass', {}, [className])} >
    </div>
  )
}
