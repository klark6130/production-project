export { UserRole } from './model/consts/userConsts';

export { getUserInited } from './model/selectors/getUserAuthData/getUserInited';

export { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';

export {
    isUserAdmin,
    isUserManager,
    getUserRoles,
} from './model/selectors/getUserAuthData/getUserRole';

export { userReducer, userActions } from './model/slice/userSlice';

export type { User, UserSchema } from './model/types/user';

export { saveJsonSettings } from './model/services/saveJsonSettings';

export { useJsonSettings } from './model/selectors/jsonSettings';
export { initAuthData } from './model/services/initAuthData';