import React from 'react'
import classNames from 'classnames'

function Header({children = null}) {
    return (
        <h6 className={classNames('d-flex', 'header', 'align-items-center', 'justify-content-between')}>
            {children}
        </h6>
    )
}

export default Header

