import React from 'react'
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client'
import { queryClient, persistOptions } from 'query'
import 'themes/Sea_Green/sea_green.scss'
import SurveyStructure from './SurveyStructure'

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
