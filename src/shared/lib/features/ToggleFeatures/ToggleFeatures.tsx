import { FeaturesFlags } from '@/shared/types/featureFlags';
import { getFeatureFlag } from '../setGetFeatures';
import { ReactElement } from 'react';

interface ToggleFeaturesProps {
    feature: keyof FeaturesFlags;
    on: ReactElement;
    off: ReactElement;
}

export const ToggleFeatures = (props: ToggleFeaturesProps) => {
    const { on, off, feature } = props;
    if (getFeatureFlag(feature)) {
        return on;
    }

    return off;
};
