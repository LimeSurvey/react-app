import React from 'react'
import classNames from 'classnames'

import SideBar from 'components/SideBar'
import SurveyStructure from 'components/SurveyStructure'
import SurveySettings from 'components/SurveySettings'
import useAppState from 'hooks/useAppState'

import './SideBarLeft.scss'

function SideBarLeft() {
    const [
        editorStructurePanelOpen
    ] = useAppState('editorStructurePanelOpen', false);

    const [
        editorSettingsPanelOpen
    ] = useAppState('editorSettingsPanelOpen', false);

    return (
        <SideBar
            visible={editorStructurePanelOpen || editorSettingsPanelOpen}
            className={classNames(
                'sidebar',
                'sidebar-left'
            )}>
            <SurveyStructure/>
            <SurveySettings/>
        </SideBar>
    )
}

export default SideBarLeft
