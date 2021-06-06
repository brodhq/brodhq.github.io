import React from 'react'
import 'tailwindcss/tailwind.css'
import 'highlight.js/styles/github.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import '../styles/global.css'
import { TrackingProvider } from 'providers/tracking'

interface AppProps {
    Component: any
    pageProps: object
}

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <TrackingProvider>
            <Component {...pageProps} />
        </TrackingProvider>
    )
}

export default App
