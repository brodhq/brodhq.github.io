import SyntaxHighlighter from 'react-syntax-highlighter'
import { vs2015 } from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import React from 'react'
import classNames from 'classnames'

export interface CodeProps {
    className?: string
}

export const Code: React.FC<CodeProps> = ({ children, className }) => {
    return (
        <code className={classNames('block bg-gray-700', className)}>
            <SyntaxHighlighter
                customStyle={{
                    textAlign: 'left',
                    backgroundColor: 'transparent',
                    background: 'none',
                    padding: '1rem',
                }}
                language="typescript"
                style={vs2015}
            >
                {children}
            </SyntaxHighlighter>
        </code>
    )
}
