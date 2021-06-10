import classNames from 'classnames'
import React from 'react'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

export interface HeaderProps {
    className?: string
    brandClassName?: string
    brandPopoverClassName?: string
    toggleClassName?: string
    itemClassName?: string
    itemPopoverClassName?: string
    activeItemClassName?: string
    right?: React.ReactNode[]
    brand?: React.ReactNode
}

export const Header: React.FC<HeaderProps> = ({
    className = '',
    toggleClassName = 'text-gray-300',
    children,
    ...props
}) => {
    function applyChildClasses(node: React.ReactNode, className?: string) {
        return React.cloneElement(
            // @ts-expect-error
            node,
            {
                // @ts-expect-error
                ...node.props,
                className: classNames(
                    // @ts-expect-error
                    node.props.className,
                    className
                ),
            }
        )
    }
    return (
        <Popover className={classNames('z-30 relative', className)}>
            {({ open }) => (
                <>
                    {/** Desktop */}
                    <div className="flex justify-between items-center px-4 py-6 sm:px-6 md:justify-start md:space-x-24">
                        {applyChildClasses(props.brand, props.brandClassName)}
                        <div className="-mr-2 -my-2 md:hidden">
                            <Popover.Button
                                className={classNames(
                                    'rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500',
                                    toggleClassName
                                )}
                            >
                                <span className="sr-only">Open menu</span>
                                <MenuIcon
                                    className="h-6 w-6"
                                    aria-hidden="true"
                                />
                            </Popover.Button>
                        </div>
                        <div className="hidden md:flex-1 md:flex md:items-center md:justify-between">
                            <Popover.Group as="nav" className="flex space-x-10">
                                {React.Children.map(children, (child) =>
                                    applyChildClasses(
                                        child,
                                        props.itemClassName
                                    )
                                )}
                            </Popover.Group>
                            <div className="flex items-center md:ml-12">
                                {React.Children.map(props.right, (child) =>
                                    applyChildClasses(
                                        child,
                                        props.itemClassName
                                    )
                                )}
                            </div>
                        </div>
                    </div>

                    {/** Mobile */}

                    <Transition
                        show={open}
                        as={Fragment}
                        enter="duration-200 ease-out"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="duration-100 ease-in"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Popover.Panel
                            focus
                            static
                            className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                        >
                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                                <div className="pt-5 pb-6 px-5">
                                    <div className="flex items-center justify-between">
                                        {applyChildClasses(
                                            props.brand,
                                            props.brandPopoverClassName
                                        )}
                                        <div className="-mr-2">
                                            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500">
                                                <span className="sr-only">
                                                    Close menu
                                                </span>
                                                <XIcon
                                                    className="h-6 w-6"
                                                    aria-hidden="true"
                                                />
                                            </Popover.Button>
                                        </div>
                                    </div>
                                </div>
                                <div className="py-6 px-5">
                                    <div className="grid grid-cols-2 gap-4">
                                        {React.Children.map(children, (child) =>
                                            applyChildClasses(
                                                child,
                                                props.itemPopoverClassName
                                            )
                                        )}
                                    </div>
                                    <div className="mt-6">
                                        {React.Children.map(
                                            props.right,
                                            (child) =>
                                                applyChildClasses(
                                                    child,
                                                    props.itemPopoverClassName
                                                )
                                        )}
                                    </div>
                                </div>
                            </div>
                        </Popover.Panel>
                    </Transition>
                </>
            )}
        </Popover>
    )
}
