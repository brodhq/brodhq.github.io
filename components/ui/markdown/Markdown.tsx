import ReactMarkdown from 'react-markdown'
import React from 'react'
import classNames from 'classnames'
import { Code } from '../code'

export interface MarkdownProps {
    className?: string
    children: string
}

export const Markdown: React.FC<MarkdownProps> = ({ children, className }) => {
    return (
        <ReactMarkdown
            className="prose"
            components={{
                code: (props) => <Code>{props.children}</Code>,
            }}
        >
            {children}
        </ReactMarkdown>
    )
}
