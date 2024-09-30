/* eslint-disable bastrikov-da-eslint-plugin/layer-imports */
import '@/app/styles/index.scss';
import { setFeatureFlags } from '@/shared/lib/features';
import { FeaturesFlags } from '@/shared/types/featureFlags';
import { Story } from '@storybook/react';

export const FeaturesDecorator =
    (features: FeaturesFlags) => (StoryComponent: Story) => {
        setFeatureFlags(features);

        return <StoryComponent />;
    };
