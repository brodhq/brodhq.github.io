import React from 'react'
import classNames from 'classnames'

export interface HeroContainerProps {
    className?: string
    asset: React.ReactNode
}

export const HeroContainer: React.FC<HeroContainerProps> = ({
    className,
    children,
    ...props
}) => {
    return (
        <div
            className={classNames(
                className,
                'relative bg-gray-800 overflow-hidden'
            )}
        >
            <div
                className="hidden sm:block sm:absolute sm:inset-0"
                aria-hidden="true"
            >
                <svg
                    className="absolute bottom-0 right-0 transform translate-x-1/2 mb-48 text-gray-700 lg:top-0 lg:mt-28 lg:mb-0 xl:transform-none xl:translate-x-0"
                    width={364}
                    height={484}
                    viewBox="0 0 364 484"
                    fill="none"
                >
                    <defs>
                        <pattern
                            id="eab71dd9-9d7a-47bd-8044-256344ee00d0"
                            x={0}
                            y={0}
                            width={20}
                            height={20}
                            patternUnits="userSpaceOnUse"
                        >
                            <rect
                                x={0}
                                y={0}
                                width={4}
                                height={4}
                                fill="currentColor"
                            />
                        </pattern>
                    </defs>
                    <rect
                        width={364}
                        height={484}
                        fill="url(#eab71dd9-9d7a-47bd-8044-256344ee00d0)"
                    />
                </svg>
            </div>
            <div className="relative flex items-center justify-center">
                <main className="mt-16 sm:mt-24">
                    <div className="mx-auto max-w-7xl">
                        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                            <div className="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center">
                                {children}
                            </div>
                            <div className="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6">
                                <div className="shadow-xl sm:max-w-md sm:w-full sm:mx-auto rounded-lg">
                                    {props.asset}
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}
