import { useTrack } from '@geislabs/website-track'
import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import 'tailwindcss/tailwind.css'
import 'highlight.js/styles/github.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import '../styles/global.css'

interface AppProps {
    Component: any
    pageProps: object
}

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
    const router = useRouter()
    const track = useTrack()

    const handleRouteChange = (url: string) => {
        track.pageview(url)
    }

    useEffect(() => {
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

export default App
