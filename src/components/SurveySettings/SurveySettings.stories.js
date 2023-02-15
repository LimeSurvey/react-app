import React from 'react'
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client'

import { queryClient, persistOptions } from 'query'

import SurveySettings from './SurveySettings'
import 'themes/Sea_Green/sea_green.scss'

export default {
    title: 'General/SurveySettings',
    component: SurveySettings,
    decorators: [
        (Story) => (
            <PersistQueryClientProvider client={queryClient} persistOptions={persistOptions}>
                <Story />
            </PersistQueryClientProvider>
        )
    ]
}

export const Basic = () => (
    <SurveySettings/>
)
