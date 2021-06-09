import classNames from 'classnames'
import React, { useState } from 'react'

export interface BlogDetailSubscribeProps {
    className?: string
    emphasizeTextClassName?: string
    emphasizeButtonClassName?: string
    onSubmit: (email: string) => void
}

export const BlogDetailSubscribe: React.FC<BlogDetailSubscribeProps> = ({
    className = '',
    emphasizeTextClassName = 'text-red-400',
    emphasizeButtonClassName = 'text-white bg-red-400 hover:bg-red-500 focus:ring-red-400',
    ...props
}) => {
    const [email, setEmail] = useState('')

    const handleSubmit: React.FormEventHandler = (event) => {
        event.preventDefault()
        props.onSubmit(email)
        setEmail('')
    }

    return (
        <div className="mt-8 lg:mt-0 lg:ml-8">
            <form className="sm:flex" onSubmit={handleSubmit}>
                <label htmlFor="emailAddress" className="sr-only">
                    Email address
                </label>
                <input
                    id="emailAddress"
                    name="emailAddress"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(event) =>
                        // @ts-expect-error
                        setEmail(event.target.value)
                    }
                    className="w-full px-5 py-3 border border-transparent placeholder-gray-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white sm:max-w-xs rounded-md"
                    placeholder="Enter your email"
                />
                <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                    <button
                        type="submit"
                        className={classNames(
                            'w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800',
                            emphasizeButtonClassName
                        )}
                    >
                        Notify me
                    </button>
                </div>
            </form>
            <p className="mt-3 text-sm text-gray-300">
                We care about the protection of your data. Read our{' '}
                <a href="#" className="text-white font-medium underline">
                    Privacy Policy.
                </a>
            </p>
        </div>
    )
}
