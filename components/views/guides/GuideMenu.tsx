import { GuideReference, Release, Section } from '@api'
import { Menu } from '@ui'
import { sortBy } from '@utils'
import { MenuNavLink } from 'components/ui/menus/MenuNavLink'
import React from 'react'

export interface GuideMenuProps {
    className?: string
    sections: Section[]
    releases: Release[]
}

export const GuideMenu: React.FC<GuideMenuProps> = ({
    className = '',
    releases = [],
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
            {/** @ts-expect-error */}
            {props.sections.map((section) => (
                <Menu key={section.name} title={section.name}>
                    {section.guides.sort(sorter).map((guide, index) => (
                        <div key={guide.slug} className="flex text-gray-500">
                            <span className="w-2.5">{index + 1}.</span>
                            <MenuNavLink href={getLink(guide)} reverse={true}>
                                {guide.title}
                            </MenuNavLink>
                        </div>
                    ))}
                </Menu>
            ))}
        </div>
    )
}

const getLink = (guide: GuideReference) => `/guides/${guide.slug}`
const sorter = (a: GuideReference, b: GuideReference) =>
    a.number > b.number ? 1 : 0
