import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import { Comment } from '../../model/types/comment';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { useTranslation } from 'react-i18next';
import { CommentCard } from '../CommentCard/CommentCard';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text } from '@/shared/ui/redesigned/Text';

interface CommentListProps {
    className?: string;
    comments?: Comment[];
    isLoading?: boolean;
}
export const CommentList = memo(
    ({ className, comments, isLoading }: CommentListProps) => {
        const { t } = useTranslation();

        if (isLoading) {
            return (
                <VStack gap="16" className={classNames('', {}, [className])}>
                    <CommentCard isLoading={true} />
                    <CommentCard isLoading={true} />
                    <CommentCard isLoading={true} />
                </VStack>
            );
        }

        return (
            <VStack gap="16" max className={classNames('', {}, [className])}>
                {comments?.length ? (
                    comments.map((comment) => (
                        <CommentCard
                            key={comment.id}
                            comment={comment}
                            isLoading={isLoading}
                        />
                    ))
                ) : (
                    <ToggleFeatures
                        feature="isAppRedesigned"
                        on={<Text text={t('Комментарии отсутствуют')} />}
                        off={
                            <TextDeprecated
                                text={t('Комментарии отсутствуют')}
                            />
                        }
                    />
                )}
            </VStack>
        );
    },
);
