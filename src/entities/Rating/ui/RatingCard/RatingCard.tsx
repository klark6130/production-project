import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { Card } from '@/shared/ui/Card/Card';
import { Drawer } from '@/shared/ui/Drawer/Drawer';
import { Input } from '@/shared/ui/Input/Input';
import { Modal } from '@/shared/ui/Modal/Modal';
import { HStack, VStack } from '@/shared/ui/Stack';
import { StarRating } from '@/shared/ui/StarRating/StarRating';
import { Text } from '@/shared/ui/Text/Text';
import { memo, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { useTranslation } from 'react-i18next';
import cls from './RatingCard.module.scss';

interface RatingCardProps {
  className?: string
  title?: string
  feedbackTitle?: string
  hasFeedback?: boolean
  onCancel?: (starCount: number) => void
  onAccept?: (starCount: number, feedback?: string) => void
} 
export const RatingCard = memo(({ className, feedbackTitle, hasFeedback, onAccept, onCancel, title }: RatingCardProps) => {
  const { t } = useTranslation();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [starsCount, setStarsCount] = useState(0);
  const [feedback, setFeedback] = useState('');

  const onSelectStars = useCallback((selectedStarsCount: number) => {
    setStarsCount(selectedStarsCount);
    if (hasFeedback) {
      setIsModalOpen(true)
    } else {
      onAccept?.(selectedStarsCount);
    }
    
  }, [hasFeedback, onAccept]);

  const acceptHandler = useCallback(() => {
    setIsModalOpen(false);
    onAccept?.(starsCount, feedback);
  }, [feedback, onAccept, starsCount])

  const cancelHandler = useCallback(() => {
    setIsModalOpen(false);
    onCancel?.(starsCount);
  }, [onCancel, starsCount])

  const modalContent = (
    <>
      <Text title={feedbackTitle}></Text>
      <Input value={feedback} onChange={setFeedback} placeholder={t('Ваш отзыв')}/>
    </>
  )

  return (
    <Card className={classNames(cls.RatingCard, {}, [className]) }>
      <VStack align={'center'} gap='8'>
        <Text title={title}/>
        <StarRating size={40} onSelect={onSelectStars}/>
        <BrowserView>
          <Modal isOpen={isModalOpen} lazy>
            <VStack max gap='32'>
              {modalContent}
              <HStack max gap='16' justify='end'>
                <Button onClick={cancelHandler} theme={ButtonTheme.OUTLINE_RED}>{t('Закрыть')}</Button>
                <Button onClick={acceptHandler}>{t('Отправить')}</Button>
              </HStack>
            </VStack>
          </Modal>
        </BrowserView>
        <MobileView>
          <Drawer isOpen={isModalOpen} lazy onClose={cancelHandler}>
            <VStack gap='32'>
              {modalContent}
              <Button fullWidth onClick={acceptHandler} >{t('Отправить')}</Button>
            </VStack>
          </Drawer>
        </MobileView>
      </VStack>
    </Card>
  )
});
