import classNames from 'classnames'
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/outline'
import React from 'react'
import { Carousel } from 'react-responsive-carousel'

export interface CarouselListProps {
    className?: string
    children: React.ReactChild[]
}

export const CarouselList: React.FC<CarouselListProps> = ({
    children,
    className,
}) => {
    return (
        <Carousel
            className={classNames('relative flex-1', className)}
            axis="horizontal"
            autoPlay={true}
            showStatus={false}
            showThumbs={false}
            showArrows={false}
            infiniteLoop={true}
            interval={4000}
            transitionTime={800}
            // renderArrowPrev={(onClick) => (
            //     <div
            //         onClick={onClick}
            //         className="group absolute left-0 top-0 bottom-0 w-10 flex justify-center cursor-pointer items-center text-gray-300"
            //     >
            //         <div className="absolute z-10 w-full h-full group-hover:bg-gray-900 group-hover:opacity-20"></div>
            //         <ChevronLeftIcon className="z-20 text-white h-5 w-5" />
            //     </div>
            // )}
            // renderArrowNext={(onClick) => (
            //     <div
            //         onClick={onClick}
            //         className="group absolute right-0 top-0 bottom-0 w-10 flex justify-center cursor-pointer items-center text-gray-300"
            //     >
            //         <div className="absolute z-10 w-full h-full group-hover:bg-gray-900 group-hover:opacity-20"></div>
            //         <ChevronRightIcon className="z-20 text-white h-5 w-5" />
            //     </div>
            // )}
        >
            {children}
        </Carousel>
    )
}
