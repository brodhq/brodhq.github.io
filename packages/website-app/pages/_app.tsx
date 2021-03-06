import React from 'react'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { NextWebVitalsMetric } from 'next/dist/next-server/lib/utils'
import * as ga from '../providers/tracking'
import 'tailwindcss/tailwind.css'
import 'highlight.js/styles/atom-one-dark.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import '../styles/global.css'

interface AppProps {
    Component: any
    pageProps: object
}

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
    const router = useRouter()

    useEffect(() => {
        const handleRouteChange = (url) => {
            ga.pageview(url)
        }
        //When the component is mounted, subscribe to router changes
        //and log those page views
        router.events.on('routeChangeComplete', handleRouteChange)

        // If the component is unmounted, unsubscribe
        // from the event with the `off` method
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange)
        }
    }, [router.events])

    return <Component {...pageProps} />
}

export function reportWebVitals(metric: NextWebVitalsMetric) {
    console.log(metric)
}
export default App
