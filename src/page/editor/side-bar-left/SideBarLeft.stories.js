import React from 'react'
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client'
import { queryClient, persistOptions } from 'query'

import 'themes/Sea_Green/sea_green.scss'
import SideBarLeft from './SideBarLeft'

export default {
    title: 'Editor/SideBarLeft',
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
    <SideBarLeft />
)
