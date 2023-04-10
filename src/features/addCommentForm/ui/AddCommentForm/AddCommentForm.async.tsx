import { FC, lazy } from 'react';
import { AddCommentFormProps } from './AddCommentForm';

export const AddCommentFormAsync = lazy<FC<AddCommentFormProps>>(async () => {
  await new Promise(resolve => setTimeout(resolve, 2000))
  return await import('./AddCommentForm');
});
