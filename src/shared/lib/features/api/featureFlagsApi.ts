import { rtkApi } from '@/shared/api/rtkApi';
import { FeaturesFlags } from '@/shared/types/featureFlags';

interface UpdateFeatureFlagsOptions {
    userId: string
    features: Partial<FeaturesFlags>
}

const featureFlagsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        updateFeatureFlags: build.mutation<void, UpdateFeatureFlagsOptions>({
            query: ( { userId, features }) => {
                console.log('update features', features)
                return {
                    url: '/users/' + userId,
                    method: 'PATCH',
                    body: {
                        features
                    }
                }}
        })
    }),
});

// export const useJsonSettings = userApi.useSetJsonSettingsMutation;
export const updateFeatureFlagsMutation = featureFlagsApi.endpoints.updateFeatureFlags.initiate;
