import React from 'react'
import SideBar from 'components/SideBar'
import SurveyStructure from 'components/SurveyStructure'
import './SideBarLeft.scss'
import Button from 'react-bootstrap/Button'
import * as Icon from 'react-bootstrap-icons'
import classNames from 'classnames'

function SideBarLeft() {
    return (
        <SideBar
            visible={true}
            className={classNames(
                'sidebar',
                'sidebar-left'
            )}>
            <SideBar.Header>
                Structure
                <Button variant="link" className={classNames('m-1')} style={{padding: 0}}>
                    <Icon.XLg color='black' size={20} />
                </Button>
            </SideBar.Header>
            <SurveyStructure>Structure here</SurveyStructure>
        </SideBar>
    )
}

export default SideBarLeft
