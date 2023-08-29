import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import cls from './AddCommentForm.module.scss';
import { Input } from '@/shared/ui/Input';
import { Button } from '@/shared/ui/Button';
import { useSelector } from 'react-redux';
import { getAddCommentFormError, getAddCommentFormText } from '../../model/selectors/addCommentFormSelectors';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { addCommentFormActions, addCommentFormReducer } from '../../model/slices/addCommentFormSlice';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { HStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

export interface AddCommentFormProps {
  className?: string
  onSendComment: (text: string) => void
} 

const reducers: ReducersList = {
  addCommentForm: addCommentFormReducer
}

const AddCommentForm = memo(({ className, onSendComment }: AddCommentFormProps) => {
  const { t } = useTranslation('article');

  const text = useSelector(getAddCommentFormText);
  const error = useSelector(getAddCommentFormError);

  const dispatch = useAppDispatch();

  const onCommentTextChange = useCallback((value: string) => {
    dispatch(addCommentFormActions.setText(value))
  }, [dispatch]);

  const onSendHandler = useCallback(() => {
    onSendComment(text || '');
    onCommentTextChange('');
  }, [onCommentTextChange, onSendComment, text])

  if (error) {
    return <Text title='Error' text='error'/>
  }

  return (
    <DynamicModuleLoader reducers={reducers} >
      <HStack 
        data-testid={'AddCommentForm'}
        justify='between' max className={classNames(cls.AddCommentForm, {}, [className]) }
      >
        <Input
          data-testid={'AddCommentForm.Input'}
          className={cls.input}
          placeholder={t('Введите текст комментария')}
          value={text}
          onChange={onCommentTextChange}
        />
        <Button 
          onClick={onSendHandler}
          data-testid={'AddCommentForm.Button'}
        >
          {t('Отправить')}
        </Button>
      </HStack>
    </DynamicModuleLoader>
  )
});

export default AddCommentForm
