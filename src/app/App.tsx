"use client"
import React, { ReactNode } from 'react'
import { Provider } from 'react-redux'
import store from "@/store";

type AppProps = {
    children: ReactNode
}
const App: React.FC<AppProps> = ({ children }) => {
    return (
        <>
            <Provider store={store}>
                {children}
            </Provider>
        </>
    )
}

export default App