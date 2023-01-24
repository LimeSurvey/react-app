import React from 'react'
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client'

import { queryClient, persistOptions } from 'query'

import SideBarLeft from './SideBar'
import './SideBar.scss'

export default {
    title: 'General/SideBar',
    component: SideBarLeft,
    decorators: [
        (Story) => (
            <PersistQueryClientProvider client={queryClient} persistOptions={persistOptions}>
                <Story />
            </PersistQueryClientProvider>
        )
    ]
}

export const Basic = () => (
    <SideBarLeft/>
)
