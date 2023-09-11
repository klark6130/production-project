import { FeaturesFlags } from '@/shared/types/featureFlags';
import { UserRole } from '../consts/userConsts';

export interface User {
    id: string;
    username: string;
    avatar?: string;
    roles?: UserRole[];
    features?: FeaturesFlags
}

export interface UserSchema {
    authData?: User;
    _inited: boolean;
}
