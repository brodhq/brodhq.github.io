import { Footer } from '@geislabs/website-layout'
import { Github, Twitter } from '@icons-pack/react-simple-icons'
import { getIndexRoute } from 'hooks/routes'
import { useWebsite } from 'hooks/website'
import React from 'react'

export interface CommonLayoutFooterProps {
    className?: string
    itemClassName?: string
}

export const CommonLayoutFooter: React.FC<CommonLayoutFooterProps> = ({
    className = '',
    ...props
}) => {
    const website = useWebsite()
    return (
        <Footer.Footer
            icons={[
                <Footer.Icon
                    name="Twitter"
                    href={website.social.github.url}
                    icon={(props) => <Github {...props} />}
                />,
                <Footer.Icon
                    name="GitHub"
                    href={website.social.twitter.url}
                    icon={(props) => <Twitter {...props} />}
                />,
            ]}
            copyright={<Footer.Copyright>{website.name}</Footer.Copyright>}
        >
            <Footer.Item href="/">Home</Footer.Item>
            <Footer.Item href={getIndexRoute('blog')}>Blog</Footer.Item>
            <Footer.ItemContact email={website.contactEmail}>
                Contact
            </Footer.ItemContact>
        </Footer.Footer>
    )
}
