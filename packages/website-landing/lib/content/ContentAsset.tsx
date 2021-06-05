import React from 'react'
import outdent from 'outdent'
import { CheckIcon } from '@heroicons/react/outline'
import { Code } from '@geislabs/website-ui'
import classNames from 'classnames'

export interface ContentAssetProps {
    className?: string
}

export const ContentAsset: React.FC<ContentAssetProps> = (props) => {
    return (
        <div className="relative rounded-2xl shadow-xl overflow-hidden">
            <div className="inset-0 min-h-72 w-full">
                <Code className="h-full bg-white filter grayscale">
                    {outdent`
                        import { browse } from 'geis'

                        // Fetch all data
                        const data = browse(
                            Json, 
                            'https://google.com', 
                            ({ data }) => ({
                                title: data['h1.title'].toString(),
                                title: data['h1.title'].toString(),
                                title: data['h1.title'].toString(),
                                title: data['h1.title'].toString()
                            })
                        )
                    `}
                </Code>
            </div>
            {/* <img
                className="absolute inset-0 h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1521510895919-46920266ddb3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&fp-x=0.5&fp-y=0.6&fp-z=3&width=1440&height=1440&sat=-100"
                alt=""
            /> */}
            {/* <div className="absolute inset-0 bg-primary-200 mix-blend-multiply" /> */}
            {/* <div className="absolute inset-0 bg-gradient-to-t from-primary-400 via-primary-400 opacity-90" /> */}
            {/* <div className="relative px-8">
                <div>
                    <img
                        className="h-12"
                        src="https://tailwindui.com/img/logos/workcation.svg?color=white"
                        alt="Workcation"
                    />
                </div>
                <blockquote className="mt-8">
                    <div className="relative text-lg font-medium text-white md:flex-grow">
                        <svg
                            className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-primary-400"
                            fill="currentColor"
                            viewBox="0 0 32 32"
                            aria-hidden="true"
                        >
                            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                        </svg>
                        <p className="relative">
                            Tincidunt integer commodo, cursus etiam aliquam
                            neque, et. Consectetur pretium in volutpat, diam.
                            Montes, magna cursus nulla feugiat dignissim id
                            lobortis amet.
                        </p>
                    </div>

                    <footer className="mt-4">
                        <p className="text-base font-semibold text-primary-200">
                            Sarah Williams, CEO at Workcation
                        </p>
                    </footer>
                </blockquote>
            </div> */}
        </div>
    )
}
