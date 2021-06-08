import classNames from 'classnames'
import React from 'react'

export interface HeaderListProps {
    className?: string
    itemClassName?: string
    activeItemClassName?: string
    children: React.ReactElement[] | React.ReactElement
}

export const HeaderList: React.FC<HeaderListProps> = ({
    className,
    itemClassName,
    activeItemClassName,
    children,
}) => {
    return (
        <div className={classNames('flex space-x-10', className)}>
            {React.Children.map(children, (child) =>
                // @ts-expect-error
                React.cloneElement(child, {
                    // @ts-expect-error
                    ...child.props,
                    // @ts-expect-error
                    className: classNames(child.props.className, itemClassName),
                    activeClassName: classNames(
                        // @ts-expect-error
                        child.props.activeClassName,
                        activeItemClassName
                    ),
                })
            )}
        </div>
    )
}
