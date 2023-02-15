import React from 'react'
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client'

import { queryClient, persistOptions } from 'query'

import SurveyStructure from './SurveyStructure'
import 'themes/Sea_Green/sea_green.scss'

export default {
    title: 'General/SurveyStructure',
    component: SurveyStructure,
    decorators: [
        (Story) => (
            <PersistQueryClientProvider client={queryClient} persistOptions={persistOptions}>
                <Story />
            </PersistQueryClientProvider>
        )
    ]
}

export const Basic = () => (
    <SurveyStructure/>
)
