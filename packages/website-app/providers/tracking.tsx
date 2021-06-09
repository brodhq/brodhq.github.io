import React, { useState, useEffect } from 'react'

const TRACKING_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS as string

export interface TrackingProps {}

export interface TrackingEvent {
    category?: string
    action: string
    label?: string
}

// log the pageview with their URL
export const pageview = (url) => {
    // @ts-expect-error
    window.gtag('config', TRACKING_ID, {
        page_path: url,
    })
}

// log specific events happening.
export const event = ({ action, params }) => {
    console.info(`EVENT -> ${action}`, params)
    // @ts-expect-error
    window.gtag('event', action, params)
}

export const installCopied = () => {
    // @ts-expect-error
    event({
        action: 'install_copied',
    })
}

export const emailSubscribed = () => {
    // @ts-expect-error
    event({
        action: 'email_subscribed',
    })
}
