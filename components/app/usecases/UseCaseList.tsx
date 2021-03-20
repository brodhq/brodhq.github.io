import classNames from 'classnames'
import React from 'react'

export interface UseCaseListProps {
    className?: string
    children: React.ReactNode[]
}

export const UseCaseList: React.FC<UseCaseListProps> = ({
    children,
    className = '',
}) => {
    return (
        <div
            className={classNames('grid grid-cols-3', {
                [className]: className,
            })}
        >
            {React.Children.map(children, (child) => {
                const cloned = React.cloneElement(
                    // @ts-expect-error
                    child,
                    {
                        className: '',
                    }
                )
                return cloned
            })}
        </div>
    )
}
