import SyntaxHighlighter from 'react-syntax-highlighter'
import { vs, vs2015 } from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import React from 'react'
import classNames from 'classnames'

export interface CodeProps {
    className?: string
    darkmode?: boolean
}

export const Code: React.FC<CodeProps> = ({
    children,
    className,
    darkmode = false,
}) => {
    return (
        <code className={classNames('block', className)}>
            <SyntaxHighlighter
                customStyle={{
                    textAlign: 'left',
                    backgroundColor: 'transparent',
                    background: 'none',
                    padding: '1rem',
                }}
                language="typescript"
                style={darkmode ? vs2015 : vs}
            >
                {children}
            </SyntaxHighlighter>
        </code>
    )
}
