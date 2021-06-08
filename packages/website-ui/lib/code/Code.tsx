import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneLight } from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import React from 'react'
import classNames from 'classnames'
import { darkTheme } from './themes'

export interface CodeProps {
    className?: string
    darkmode?: boolean
    children: string
}

export const Code: React.FC<CodeProps> = ({
    children,
    className = 'text-sm font-small p-4 rounded-lg shadow-md',
    darkmode = false,
}) => {
    return (
        <div
            className={classNames('block', className, {
                'bg-gray-700 text-gray-400': darkmode,
            })}
        >
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
        </div>
    )
}
