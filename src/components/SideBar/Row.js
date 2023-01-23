import React from 'react'
import classNames from 'classnames'

function Row({children = null, style = {}}) {
    return (
        <div
            className={classNames(
                'd-flex', 'sidebar-row',
                'align-items-center', 'justify-content-between'
            )}
            style={style}
        >
            {children}
        </div>
    )
}

export default Row;

