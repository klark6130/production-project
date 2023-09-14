import { FeaturesFlags } from '@/shared/types/featureFlags';
import { getFeatureFlag } from './setGetFeatures';

interface ToggleFeaturesOptions<T> {
    name: keyof FeaturesFlags
    on: () => T
    off:() => T
}

export function toogleFeatures<T>( { name, off, on }: ToggleFeaturesOptions<T>): T {
    if(getFeatureFlag(name)){
        return on();
    }

    return off();
}