import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneLight } from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import React from 'react'
import classNames from 'classnames'
import { darkTheme } from './themes'

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
                showLineNumbers={true}
                lineNumberStyle={{ marginRight: '0.5rem', opacity: 0.3 }}
                style={darkmode ? darkTheme : atomOneLight}
            >
                {children}
            </SyntaxHighlighter>
        </code>
    )
}
