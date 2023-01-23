import React from 'react'
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client'
import { queryClient, persistOptions } from 'query'

import 'themes/Sea_Green/sea_green.scss'
import TopBar from './TopBar'

export default {
    title: 'Editor/TopBar',
    component: TopBar,
    decorators: [
        (Story) => (
            <PersistQueryClientProvider client={queryClient} persistOptions={persistOptions}>
                <div id="container">
                    <Story />
                </div>
            </PersistQueryClientProvider>
        )
    ]
}

export const Basic = () => (
    <TopBar />
)