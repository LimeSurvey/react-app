import React from 'react'
import classNames from 'classnames'

import SideBar from 'components/SideBar'

import './SideBarRight.scss'

function SideBarRight() {
    return (
        <SideBar visible={true}>
            <div
                className={classNames(
                    'sidebar',
                    'sidebar-right',
                    'p-1',
                    'align-items-center',
                    'justify-content-start'
                )}
            >
                right side bar
            </div>
        </SideBar>
    )
}

export default SideBarRight
