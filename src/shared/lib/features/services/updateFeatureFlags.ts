import { ThunkConfig } from '@/app/providers/StoreProvider';
import { FeaturesFlags } from '@/shared/types/featureFlags';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { updateFeatureFlagsMutation } from '../api/featureFlagsApi';
import { getAllFeatureFlags } from '../lib/setGetFeatures';

interface UpdateFeatureFlagOptions {
    userId: string
    newFeatures: Partial<FeaturesFlags>
}

export const updateFeatureFlag = createAsyncThunk<
    void,
    UpdateFeatureFlagOptions,
    ThunkConfig<string[]>
>('user/saveJsonSettings', async ({ newFeatures, userId }, thunkAPI) => {
    const { rejectWithValue, dispatch } = thunkAPI;

    try {
        // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
        await dispatch(
            updateFeatureFlagsMutation({
                userId,
                features: {
                    ...getAllFeatureFlags(),
                    ...newFeatures
                }
            })
        )
        console.log('reload window')

        window.location.reload(); 
        return undefined;
    } catch (error) {
        console.error(error);
        return rejectWithValue(['']);
    }
});
