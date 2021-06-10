import { GuideReference } from '@geislabs/website-content'
import { Button } from '@geislabs/website-ui'
import classNames from 'classnames'
import React from 'react'

export interface CommonContentPaginationProps {
    className?: string
    previous?: GuideReference | null
    next?: GuideReference | null
    getHref: (guide: GuideReference) => string
}

export const CommonContentPagination: React.FC<CommonContentPaginationProps> =
    ({ className = '', ...props }) => {
        return (
            <div
                className={classNames(
                    'flex space-y-4 flex-col md:flex-row md:space-y-0 md:space-x-4',
                    className
                )}
            >
                {props.previous && (
                    <div>
                        <Button.Primary
                            minimal={true}
                            href={props.getHref(props.previous)}
                        >
                            Previous: {props.previous.title}
                        </Button.Primary>
                    </div>
                )}
                {props.next && (
                    <div>
                        <Button.Primary
                            minimal={true}
                            href={props.getHref(props.next)}
                        >
                            Next: {props.next.title}
                        </Button.Primary>
                    </div>
                )}
            </div>
        )
    }
