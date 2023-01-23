import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'themes/default.scss'
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import Router from 'Router'
import { RouterProvider } from 'react-router-dom'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client'
import { queryClient, persistOptions } from 'Query'

function App() {
    return (
        <ThemeProvider breakpoints={['lg', 'xl']}>
            <PersistQueryClientProvider client={queryClient} persistOptions={persistOptions}>
                <RouterProvider router={Router} />
                <ReactQueryDevtools initialIsOpen={false} />
            </PersistQueryClientProvider>
        </ThemeProvider>
    )
}

export default App
