import React from 'react'
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client'
import { queryClient, persistOptions } from 'query'
import 'themes/Sea_Green/sea_green.scss'
import SurveySettings from './SurveySettings'

export default {
    title: 'General/SurveySettings',
    component: SurveySettings
};

export const Basic = () => (
    <PersistQueryClientProvider client={queryClient} persistOptions={persistOptions}>
        <SurveySettings/>
    </PersistQueryClientProvider>
);
