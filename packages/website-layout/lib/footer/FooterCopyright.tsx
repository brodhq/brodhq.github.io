import classNames from 'classnames'
import React from 'react'

export interface FooterCopyrightProps {
    className?: string
}

export const FooterCopyright: React.FC<FooterCopyrightProps> = ({
    ...props
}) => {
    return (
        <p className="mt-8 text-center text-base text-gray-400">
            &copy; {props.children} - All rights reserved.
        </p>
    )
}
