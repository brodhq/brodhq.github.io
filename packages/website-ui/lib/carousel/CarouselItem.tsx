import classNames from 'classnames'
import React from 'react'

export interface CarouselItemProps {
    className?: string
}

export const CarouselItem: React.FC<CarouselItemProps> = ({
    children,
    className,
}) => {
    return <div className={classNames('pb-5 mb-1', className)}>{children}</div>
}
