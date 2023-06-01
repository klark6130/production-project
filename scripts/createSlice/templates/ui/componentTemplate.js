module.exports = (componentName) => {
  return `
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './${componentName}.module.scss';
import { memo } from 'react';

interface ${componentName}Props {
  className?: string
  isLoading?: boolean
} 

export const ${componentName}Component = memo(({ className, isLoading }: ${componentName}Props) => {
  const { t } = useTranslation('${componentName}');

  return (
    <div 
      className={classNames(cls.${componentName}, {}, [className]) }
    >
    </div> 
  )
})
`
}