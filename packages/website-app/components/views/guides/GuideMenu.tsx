import { Menu, NavLink } from '@geislabs/website-ui'
import { GuideReference, Release, Section } from '@geislabs/website-content'
import { sortBy } from '@utils'
import React from 'react'

export interface GuideMenuProps {
    className?: string
    namespace?: string
    sections: Section[]
    releases: Release[]
}

export const GuideMenu: React.FC<GuideMenuProps> = ({
    className = '',
    releases = [],
    namespace = 'guides',
    ...props
}) => {
    const [release] = sortBy(releases, 'date', 'desc')
    return (
        <div className="space-y-5">
            {release && (
                <a className="underline text-xl text-gray-800" href="#">
                    News: {release.title}
                </a>
            )}
            {props.sections.map((section) => (
                <Menu key={section.name} title={section.name}>
                    {section.guides.sort(sorter).map((guide, index) => (
                        <div key={guide.slug} className="flex text-gray-500">
                            <span className="w-2.5">{index + 1}.</span>
                            <li className="ml-2">
                                <NavLink
                                    href={getLink(namespace, guide)}
                                    reverse={true}
                                >
                                    {guide.title}
                                </NavLink>
                            </li>
                        </div>
                    ))}
                </Menu>
            ))}
        </div>
    )
}

const getLink = (namespace: string, guide: GuideReference) =>
    `/${namespace}/${guide.slug}`
const sorter = (a: GuideReference, b: GuideReference) =>
    a.number > b.number ? 1 : 0
