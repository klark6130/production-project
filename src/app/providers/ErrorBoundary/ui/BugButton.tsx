import { classNames } from '@/shared/lib/classNames/classNames';
import { useEffect, useState } from 'react';
import { Button } from '@/shared/ui/Button';
import { useTranslation } from 'react-i18next';

interface BugButtonProps {
  className?: string
} 

// Компонент для тестирование багов
export const BugButton = ({ className }: BugButtonProps) => {
  const [error, setError] = useState(false);
  const { t } = useTranslation();

  const onClick = () => { setError(true); };

  useEffect(() => {
    if (error) {
      throw new Error('My custom error');
    }
  }, [error])

  return (
    <Button 
      onClick={onClick}
      className={classNames('', {}, [className])}
    >
      {t('Throw error')}
    </Button>
  )
}
