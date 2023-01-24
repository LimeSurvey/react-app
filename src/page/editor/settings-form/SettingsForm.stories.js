import React from 'react';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client'

import { queryClient, persistOptions } from 'query'

import { SettingsForm } from './SettingsForm'
import './SettingsForm.scss'

export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Editor/SettingsForm',
    component: SettingsForm,
    decorators: [
        (Story) => (
            <PersistQueryClientProvider client={queryClient} persistOptions={persistOptions}>
                <Story />
            </PersistQueryClientProvider>
        )
    ]
}

export const Basic = () => (
    <SettingsForm />
)