import { classNames } from '@/shared/lib/classNames/classNames';
import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { StarRating } from '@/shared/ui/deprecated/StarRating';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Drawer } from '@/shared/ui/redesigned/Drawer';
import { Modal } from '@/shared/ui/redesigned/Modal';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { memo, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { useTranslation } from 'react-i18next';
import cls from './RatingCard.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text } from '@/shared/ui/redesigned/Text';
import { Input } from '@/shared/ui/redesigned/Input';
import { Button } from '@/shared/ui/redesigned/Button';
import { Card } from '@/shared/ui/redesigned/Card';

interface RatingCardProps {
    className?: string;
    title?: string;
    feedbackTitle?: string;
    hasFeedback?: boolean;
    onCancel?: (starsCount: number) => void;
    onAccept?: (starsCount: number, feedback?: string) => void;
    rate?: number;
}
export const RatingCard = memo(
    ({
        className,
        feedbackTitle,
        hasFeedback,
        onAccept,
        onCancel,
        title,
        rate = 0,
    }: RatingCardProps) => {
        const { t } = useTranslation();

        const [isModalOpen, setIsModalOpen] = useState(false);
        const [starsCount, setStarsCount] = useState(rate);
        const [feedback, setFeedback] = useState('');

        const onSelectStars = useCallback(
            (selectedStarsCount: number) => {
                setStarsCount(selectedStarsCount);
                if (hasFeedback) {
                    setIsModalOpen(true);
                } else {
                    onAccept?.(selectedStarsCount);
                }
            },
            [hasFeedback, onAccept],
        );

        const acceptHandler = useCallback(() => {
            setIsModalOpen(false);
            onAccept?.(starsCount, feedback);
        }, [feedback, onAccept, starsCount]);

        const cancelHandler = useCallback(() => {
            setIsModalOpen(false);
            onCancel?.(starsCount);
        }, [onCancel, starsCount]);

        const modalContent = (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <>
                        <Text title={feedbackTitle} />
                        <Input
                            data-testid={'RatingCard.Input'}
                            value={feedback}
                            onChange={setFeedback}
                            placeholder={t('Ваш отзыв')}
                        />
                    </>
                }
                off={
                    <>
                        <TextDeprecated title={feedbackTitle} />
                        <InputDeprecated
                            data-testid={'RatingCard.Input'}
                            value={feedback}
                            onChange={setFeedback}
                            placeholder={t('Ваш отзыв')}
                        />
                    </>
                }
            />
        );

        const content = (
            <VStack align={'center'} gap="8" max>
                <ToggleFeatures
                    feature="isAppRedesigned"
                    on={
                        <Text
                            title={starsCount ? t('Спасибо за оценку') : title}
                        />
                    }
                    off={
                        <TextDeprecated
                            title={starsCount ? t('Спасибо за оценку') : title}
                        />
                    }
                />

                <StarRating
                    size={24}
                    className={cls.StarRating}
                    onSelect={onSelectStars}
                    selectedStars={starsCount}
                />
                <BrowserView>
                    <Modal isOpen={isModalOpen} lazy>
                        <VStack max gap="32">
                            {modalContent}
                            <ToggleFeatures
                                feature="isAppRedesigned"
                                on={
                                    <HStack
                                        max
                                        gap="16"
                                        justify="end"
                                        wrap="wrap"
                                    >
                                        <Button
                                            data-testid={'RatingCard.Close'}
                                            onClick={cancelHandler}
                                        >
                                            {t('Закрыть')}
                                        </Button>
                                        <Button
                                            data-testid={'RatingCard.Send'}
                                            onClick={acceptHandler}
                                        >
                                            {t('Отправить')}
                                        </Button>
                                    </HStack>
                                }
                                off={
                                    <HStack
                                        max
                                        gap="16"
                                        justify="end"
                                        wrap="wrap"
                                    >
                                        <ButtonDeprecated
                                            data-testid={'RatingCard.Close'}
                                            onClick={cancelHandler}
                                            theme={ButtonTheme.OUTLINE_RED}
                                        >
                                            {t('Закрыть')}
                                        </ButtonDeprecated>
                                        <ButtonDeprecated
                                            data-testid={'RatingCard.Send'}
                                            onClick={acceptHandler}
                                        >
                                            {t('Отправить')}
                                        </ButtonDeprecated>
                                    </HStack>
                                }
                            />
                        </VStack>
                    </Modal>
                </BrowserView>
                <MobileView>
                    <Drawer isOpen={isModalOpen} lazy onClose={cancelHandler}>
                        <VStack gap="32">
                            {modalContent}
                            <ToggleFeatures
                                feature="isAppRedesigned"
                                on={
                                    <Button fullWidth onClick={acceptHandler}>
                                        {t('Отправить')}
                                    </Button>
                                }
                                off={
                                    <ButtonDeprecated
                                        fullWidth
                                        onClick={acceptHandler}
                                    >
                                        {t('Отправить')}
                                    </ButtonDeprecated>
                                }
                            />
                        </VStack>
                    </Drawer>
                </MobileView>
            </VStack>
        );

        return (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <Card
                        className={classNames(cls.RatingCard, {}, [className])}
                        padding="24"
                        border="round"
                        max
                        data-testid={'RatingCard'}
                    >
                        {content}
                    </Card>
                }
                off={
                    <CardDeprecated
                        className={classNames(cls.RatingCard, {}, [className])}
                        max
                        data-testid={'RatingCard'}
                    >
                        {content}
                    </CardDeprecated>
                }
            />
        );
    },
);
