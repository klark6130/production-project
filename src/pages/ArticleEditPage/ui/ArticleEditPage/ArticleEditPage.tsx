/* eslint-disable @typescript-eslint/restrict-plus-operands */
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './ArticleEditPage.module.scss';
import { Page } from '@/widgets/Page/Page';
import { useParams } from 'react-router-dom';

interface ArticleEditPageProps {
  className?: string
} 
const ArticleEditPage = memo(({ className }: ArticleEditPageProps) => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const isEdit = Boolean(id);
  return (
    <Page className={classNames(cls.ArticleEditPage, {}, [className]) }>
      {isEdit ? 'Редактирование статьи с ID ' + id : ' Создание новой статьи ' }
    </Page>
  )
});

export default ArticleEditPage