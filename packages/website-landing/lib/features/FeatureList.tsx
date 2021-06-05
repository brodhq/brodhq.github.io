import React from 'react'

export const FeatureList: React.FC = ({ children }) => {
    return (
        <div className="">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:pb-24 lg:px-8">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900">
                        All-in-one platform
                    </h2>
                    <p className="mt-4 text-lg text-gray-500">
                        Ac euismod vel sit maecenas id pellentesque eu sed
                        consectetur. Malesuada adipiscing sagittis vel nulla
                        nec.
                    </p>
                </div>
                <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
                    {children}
                </dl>
            </div>
        </div>
    )
}
