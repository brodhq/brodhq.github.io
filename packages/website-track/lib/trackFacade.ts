import { AnyEvent } from './trackEvents'

function event({ kind, ...data }: AnyEvent) {
    try {
        console.info(`[TRACK]`, kind, data)
        // @ts-expect-error
        window.gtag('event', kind, data)
    } catch (error) {
        console.error(error)
    }
}

const pageview = (url: string) => {
    // @ts-expect-error
    window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
        page_path: url,
    })
}

export function useTrack() {
    const installCopied = () => {
        return event({ kind: 'install_copied' })
    }
    return { installCopied, pageview }
}
