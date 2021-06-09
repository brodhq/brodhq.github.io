import { Sidebar } from '@geislabs/website-layout'
import { Menu } from '@geislabs/website-ui'
import React from 'react'
import classNames from 'classnames'
import {
    FacebookIcon,
    FacebookShareButton,
    RedditIcon,
    RedditShareButton,
    TwitterIcon,
    TwitterShareButton,
} from 'react-share'

export interface BlogDetailSidebarProps {
    className?: string
}

export const BlogDetailSidebar: React.FC<BlogDetailSidebarProps> = ({
    className = '',
    ...props
}) => {
    const buttonClasses =
        'outline-none active:focus:outline-none focus:outline-none'
    const iconClasses = 'w-10 h-10 rounded-full'
    return (
        <Sidebar>
            <Menu title="Share">
                <div className="space-x-3">
                    <FacebookShareButton className={buttonClasses} url="">
                        <FacebookIcon className={iconClasses} />
                    </FacebookShareButton>
                    <RedditShareButton className={buttonClasses} url="asd">
                        <RedditIcon className={iconClasses} />
                    </RedditShareButton>
                    <TwitterShareButton
                        className={buttonClasses}
                        url="asd"
                        title="adasd"
                    >
                        <TwitterIcon className={iconClasses} />
                    </TwitterShareButton>
                </div>
            </Menu>
        </Sidebar>
    )
}
