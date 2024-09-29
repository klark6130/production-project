import { classNames } from '@/shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ToggleFeatures } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { Text as TextDeprecated, TextTheme } from '@/shared/ui/deprecated/Text';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
    getLoginError,
    getLoginIsLoading,
    getLoginPassword,
    getLoginUsername,
} from '../../model/selectors/getLoginState/getLoginState';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';
import { Text } from '@/shared/ui/redesigned/Text';
import { Input } from '@/shared/ui/redesigned/Input';
import { Button } from '@/shared/ui/redesigned/Button';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { useForceUpdate } from '@/shared/lib/render/forceUpdate';

export interface LoginFormProps {
    className?: string;
    onSuccess: () => void;
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

    const forceUpdate = useForceUpdate();

    const onChangeUsername = useCallback(
        (value: string) => {
            dispatch(loginActions.setUsername(value));
        },
        [dispatch],
    );

    const onChangePassword = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value));
        },
        [dispatch],
    );

    const onLoginClick = useCallback(async () => {
        const result = await dispatch(loginByUsername({ username, password }));
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess();
            forceUpdate();
        }
        console.log('result', result);
    }, [onSuccess, dispatch, username, password, forceUpdate]);

    const onPressEnter = useCallback(() => {
        onLoginClick();
    }, [onLoginClick]);

    console.log('error', error);

    return (
        <DynamicModuleLoader
            reducers={initialReducers}
            removeAfterUnmount={true}
        >
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <VStack
                        gap="16"
                        className={classNames(cls.LoginForm, {}, [className])}
                    >
                        <Text title={t('Форма авторизации')} />

                        {error && <Text text={error} variant="error" />}
                        <Input
                            placeholder={t('Введите username')}
                            type="text"
                            className={cls.input}
                            autoFocus={true}
                            onChange={onChangeUsername}
                            value={username}
                        />
                        <Input
                            placeholder={t('Введите пароль')}
                            type="text"
                            className={cls.input}
                            onChange={onChangePassword}
                            onPressEnter={onPressEnter}
                            value={password}
                        />
                        <Button
                            variant="outline"
                            className={cls.loginBtn}
                            // eslint-disable-next-line @typescript-eslint/no-misused-promises
                            onClick={onLoginClick}
                            disabled={isLoading}
                        >
                            {t('Войти')}
                        </Button>
                    </VStack>
                }
                off={
                    <div className={classNames(cls.LoginForm, {}, [className])}>
                        <TextDeprecated title={t('Форма авторизации')} />

                        {error && (
                            <TextDeprecated
                                text={error}
                                theme={TextTheme.ERROR}
                            />
                        )}

                        <InputDeprecated
                            placeholder={t('Введите username')}
                            type="text"
                            className={cls.input}
                            autoFocus={true}
                            onChange={onChangeUsername}
                            value={username}
                        />
                        <InputDeprecated
                            placeholder={t('Введите пароль')}
                            type="text"
                            className={cls.input}
                            onChange={onChangePassword}
                            onPressEnter={onPressEnter}
                            value={password}
                        />
                        <ButtonDeprecated
                            theme={ButtonTheme.OUTLINE}
                            className={cls.loginBtn}
                            // eslint-disable-next-line @typescript-eslint/no-misused-promises
                            onClick={onLoginClick}
                            disabled={isLoading}
                        >
                            {t('Войти')}
                        </ButtonDeprecated>
                    </div>
                }
            />
        </DynamicModuleLoader>
    );
});

export default LoginForm;
