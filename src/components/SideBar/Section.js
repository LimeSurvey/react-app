import React from 'react'
import classNames from 'classnames'

function Section({children = null, style = {}}) {
    return (
        <div
            className={classNames('sidebar-section')}
            style={style}
        >
            {children}
        </div>
    )
}

export default Section;

