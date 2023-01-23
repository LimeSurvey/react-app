import React from 'react'
import SideBar from 'components/SideBar'
import './SideBarRight.scss'
import classNames from 'classnames'

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
