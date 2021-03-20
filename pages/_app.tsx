import React from 'react'
import 'tailwindcss/tailwind.css'
import '../styles/global.css'

interface AppProps {
    Component: any
    pageProps: object
}

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
    return <Component {...pageProps} />
}

export default App
