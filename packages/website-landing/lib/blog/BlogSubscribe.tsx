import React, { useState } from 'react'

export interface BlogSubscribeProps {
    onSubscribe: (email: string) => Promise<void> | void
}

export const BlogSubscribe: React.FC<BlogSubscribeProps> = ({
    children,
    ...props
}) => {
    const [email, setEmail] = useState('')
    const handleSubmit = () => {
        props.onSubscribe(email)
        setEmail('')
    }
    return (
        <div>
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
                Press
            </h2>
            <div className="mt-3 sm:mt-4 lg:grid lg:grid-cols-2 lg:gap-5 lg:items-center">
                <p className="text-xl text-gray-500">
                    Get weekly articles in your inbox on how to grow your
                    business.
                </p>
                <form className="mt-6 flex flex-col sm:flex-row lg:mt-0 lg:justify-end">
                    <div>
                        <label htmlFor="email-address" className="sr-only">
                            Email address
                        </label>
                        <input
                            id="email-address"
                            name="email-address"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            type="email"
                            autoComplete="email"
                            required
                            className="appearance-none w-full px-4 py-2 border border-gray-300 text-base rounded-md text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:ring-primary-500 focus:border-primary-500 lg:max-w-xs"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="mt-2 flex-shrink-0 w-full flex rounded-md shadow-sm sm:mt-0 sm:ml-3 sm:w-auto sm:inline-flex">
                        <button
                            onClick={handleSubmit}
                            type="button"
                            className="w-full bg-primary-600 px-4 py-2 border border-transparent rounded-md flex items-center justify-center text-base font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 sm:w-auto sm:inline-flex"
                        >
                            Notify me
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
