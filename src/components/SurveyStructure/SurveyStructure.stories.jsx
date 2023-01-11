import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client'
import { queryClient, persistOptions } from 'Query'
import 'themes/Sea_Green/sea_green.scss'
import SurveyStructure from './SurveyStructure'

export default {
    title: 'General/SurveyStructure',
    component: SurveyStructure
};

export const Basic = () => (
    <PersistQueryClientProvider client={queryClient} persistOptions={persistOptions}>
        <SurveyStructure/>
    </PersistQueryClientProvider>
);
