import React from 'react'
import classNames from 'classnames'
import { Button, ButtonProps } from './Button'

export interface ButtonPrimaryProps extends ButtonProps {
    className?: string
}

export const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({
    className,
    minimal,
    ...props
}) => {
    return (
        <Button
            {...props}
            className={classNames('', className, {
                'btn-primary-minimal': minimal,
                'btn-primary': !minimal,
            })}
        >
            {props.children}
        </Button>
    )
}
