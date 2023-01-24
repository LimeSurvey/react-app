import React from 'react'
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client'

import { queryClient, persistOptions } from 'query'

import SideBarRight from './SideBarRight'
import './SideBarRight.scss'

export default {
    title: 'Editor/SideBarRight',
    component: SideBarRight,
    decorators: [
        (Story) => (
            <PersistQueryClientProvider client={queryClient} persistOptions={persistOptions}>
                <Story />
            </PersistQueryClientProvider>
        )
    ]
}

export const Basic = () => (
    <SideBarRight />
)