import React from 'react'
import { BlogPost } from '../blogTypes'

export interface BlogDetailPageProps {
    description: string
    post: BlogPost
    content: string
}

export const BlogDetailPage: React.FC<BlogDetailPageProps> = ({
    post,
    content,
    ...props
}) => {
    return (
        <div className="divide-y-2 divide-gray-200">
            <div className="pb-6">
                <h2 className="text-2xl">{post.summary}</h2>
            </div>
            <div className="pt-6">
                <div
                    className="space-y-5"
                    dangerouslySetInnerHTML={{ __html: content }}
                />
            </div>
        </div>
    )
}
