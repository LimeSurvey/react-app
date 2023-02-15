import React from 'react'
import router from 'router'
import { RouterProvider } from 'react-router-dom'
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client'

import { queryClient, persistOptions } from 'query'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'themes/default.scss'

function App() {
    return (
        <ThemeProvider breakpoints={['lg', 'xl']}>
            <PersistQueryClientProvider client={queryClient} persistOptions={persistOptions}>
                <RouterProvider router={router} />
                <ReactQueryDevtools initialIsOpen={false} />
            </PersistQueryClientProvider>
        </ThemeProvider>
    )
}

export default App
