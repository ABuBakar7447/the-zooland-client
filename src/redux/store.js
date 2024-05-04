import { configureStore } from '@reduxjs/toolkit'
import { zoolandapi } from './api'

export const store = configureStore({
    reducer: {
        [zoolandapi.reducerPath]: zoolandapi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(zoolandapi.middleware),
})