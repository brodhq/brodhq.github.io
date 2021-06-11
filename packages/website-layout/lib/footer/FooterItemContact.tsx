import classNames from 'classnames'
import React from 'react'
import { FooterItem } from './FooterItem'

export interface FooterItemContactProps {
    className?: string
    email: string
}

export const FooterItemContact: React.FC<FooterItemContactProps> = ({
    email,
    ...props
}) => {
    const mailto = `mailto: ${email}`
    return <FooterItem href={mailto} {...props} />
}
