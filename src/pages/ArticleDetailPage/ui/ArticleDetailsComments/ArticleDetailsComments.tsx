import { CommentList } from 'entities/Comment';
import { AddCommentForm } from 'features/addCommentForm';
import { Suspense, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { VStack } from 'shared/ui/Stack';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { addCommentForArticle } from '../../model/services/addCommentForArticle';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { getArticleComments } from '../../model/slices/articleDetailsCommentsSlice';
import { Loader } from 'shared/ui/Loader/Loader';

interface ArticleDetailsCommentsProps {
  className?: string
  id?: string
} 
export const ArticleDetailsComments = memo(({ className, id }: ArticleDetailsCommentsProps) => {
  const { t } = useTranslation('article');

  const dispatch = useAppDispatch();

  const comments = useSelector(getArticleComments.selectAll);
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading);

  const onSendComment = useCallback((text: string) => {
    dispatch(addCommentForArticle(text));
  }, [dispatch])

  useInitialEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchCommentsByArticleId(id))
    }
  })

  return (
    <VStack gap='16' max className={classNames('', {}, [className]) }>
      <Text size={TextSize.L} className={''} title={t('Комментарии')}/>
      <AddCommentForm onSendComment={onSendComment}/>
      <CommentList comments={comments} isLoading={commentsIsLoading}/>
    </VStack>
  )
});
