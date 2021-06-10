import { Menu } from '@geislabs/website-ui'
import React from 'react'
import {
    RedditIcon,
    RedditShareButton,
    TwitterIcon,
    TwitterShareButton,
} from 'react-share'
import { BlogPost } from '../blogTypes'

export interface BlogDetailShareMenuProps {
    className?: string
    post: BlogPost
    twitterHandle?: string
}

export const BlogDetailShareMenu: React.FC<BlogDetailShareMenuProps> = ({
    className = '',
    ...props
}) => {
    const buttonClasses =
        'outline-none active:focus:outline-none focus:outline-none'
    const iconClasses = 'w-10 h-10 rounded-full'
    // @ts-expect-error
    const url = process.browser ? window.location : ''
    const twitterRelated = props.twitterHandle ? [props.twitterHandle] : []
    return (
        <Menu title="Share">
            <div className="space-x-3">
                <RedditShareButton
                    className={buttonClasses}
                    url={url}
                    title={props.post.title}
                >
                    <RedditIcon className={iconClasses} />
                </RedditShareButton>
                <TwitterShareButton
                    className={buttonClasses}
                    url={url}
                    title={props.post.title}
                    related={twitterRelated}
                >
                    <TwitterIcon className={iconClasses} />
                </TwitterShareButton>
            </div>
        </Menu>
    )
}
