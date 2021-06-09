import * as track from '../providers/tracking'

export interface SubscribeOptions {}

export function useSubscribe(options: Partial<SubscribeOptions> = {}) {
    const handleSubmit = (email: string) => {
        track.emailSubscribed()
    }
    return { onSubmit: handleSubmit }
}
