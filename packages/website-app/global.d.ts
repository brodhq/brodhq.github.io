declare module '*.yml' {
    const value: string
    export default value
}

declare module '*.png' {
    const value: string
    export default value
}

declare module '*.svg' {
    import { FunctionComponent } from 'react'
    const value: FunctionComponent<{ className?: string }>
    export default value
}
