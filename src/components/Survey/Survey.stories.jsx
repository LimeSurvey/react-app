import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client'
import { queryClient, persistOptions } from 'Query'
import 'themes/Sea_Green/sea_green.scss'
import Survey from './Survey'

export default {
    title: 'General/Survey',
    component: Survey
};

export const Basic = () => (
    <PersistQueryClientProvider client={queryClient} persistOptions={persistOptions}>
        <Survey/>
    </PersistQueryClientProvider>
);
