import { FeaturesFlags } from '@/shared/types/featureFlags';

let featureFlags: FeaturesFlags = {}

export function setFeatureFlags(newFeatureFlags?: FeaturesFlags){
    if(newFeatureFlags) {
        featureFlags = newFeatureFlags;
    }
}

export function getFeatureFlag(flag: keyof FeaturesFlags){
    return featureFlags[flag] ?? false;
}

export function getAllFeatureFlags(){
    return featureFlags;
}

