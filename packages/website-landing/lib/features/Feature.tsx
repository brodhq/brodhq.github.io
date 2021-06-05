import React from 'react'
import { CheckIcon } from '@heroicons/react/outline'

const features = [
    {
        name: 'Invite team members',
        description:
            'You can manage phone, email and chat conversations all from a single mailbox.',
    },
    {
        name: 'List view',
        description:
            'You can manage phone, email and chat conversations all from a single mailbox.',
    },
    {
        name: 'Keyboard shortcuts',
        description:
            'You can manage phone, email and chat conversations all from a single mailbox.',
    },
    {
        name: 'Calendars',
        description:
            'You can manage phone, email and chat conversations all from a single mailbox.',
    },
    {
        name: 'Notifications',
        description:
            'Find what you need with advanced filters, bulk actions, and quick views.',
    },
    {
        name: 'Boards',
        description:
            'Find what you need with advanced filters, bulk actions, and quick views.',
    },
    {
        name: 'Reporting',
        description:
            'Find what you need with advanced filters, bulk actions, and quick views.',
    },
    {
        name: 'Mobile app',
        description:
            'Find what you need with advanced filters, bulk actions, and quick views.',
    },
]

export const Feature: React.FC = () => {
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
                    {features.map((feature) => (
                        <div key={feature.name} className="relative">
                            <dt>
                                <CheckIcon
                                    className="absolute h-6 w-6 text-green-500"
                                    aria-hidden="true"
                                />
                                <p className="ml-9 text-lg leading-6 font-medium text-gray-900">
                                    {feature.name}
                                </p>
                            </dt>
                            <dd className="mt-2 ml-9 text-base text-gray-500">
                                {feature.description}
                            </dd>
                        </div>
                    ))}
                </dl>
            </div>
        </div>
    )
}
