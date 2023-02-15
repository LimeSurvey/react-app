import React from 'react'
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client'

import { queryClient, persistOptions } from 'query'

import QuestionTypeSelector from './QuestionTypeSelector'
import 'themes/Sea_Green/sea_green.scss'

export default {
    title: 'General/QuestionTypeSelector',
    component: QuestionTypeSelector,
    decorators: [
        (Story) => (
            <PersistQueryClientProvider client={queryClient} persistOptions={persistOptions}>
                <Story />
            </PersistQueryClientProvider>
        )
    ]
}

export const Basic = () => (
    <QuestionTypeSelector/>
)
