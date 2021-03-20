import { Usecase } from '@api'
import classNames from 'classnames'
import Link from 'next/link'
import React from 'react'

export interface UseCaseProps {
    className?: string
    active?: boolean
    usecase: Usecase
}

export const UseCaseListItem: React.FC<UseCaseProps> = ({
    active = false,
    className = '',
    usecase,
    ...props
}) => {
    const href = `blog/${usecase.slug}`
    return (
        <div
            className={classNames('flex flex-col space-y-3', {
                [className]: className,
            })}
        >
            <Link href={href}>
                <div
                    className={classNames(
                        'h-36 w-1/1 border-2 bg-gray-50 border-gray-500 flex justify-center items-center cursor-pointer',
                        {
                            'border-purple-900': active,
                        }
                    )}
                >
                    {usecase.title}
                </div>
            </Link>
            {usecase.tags.length > 0 && (
                <div>
                    <ul className="flex space-x-3 justify-center">
                        {usecase.tags.map((tag) => (
                            <li
                                key={tag}
                                className={classNames(
                                    'bg-purple-100 text-purple-900 rounded p-1'
                                )}
                            >
                                #{tag}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}
