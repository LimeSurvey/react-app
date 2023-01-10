import React from 'react'
import SideBar from 'components/SideBar'
import SurveyStructure from 'components/SurveyStructure'
import SurveySettings from 'components/SurveySettings'
import './SideBarLeft.scss'
import classNames from 'classnames'
import useAppState from 'hooks/useAppState'

function SideBarLeft() {
    const [
        editorStructurePanelOpen
    ] = useAppState('editorStructurePanelOpen', false);

    const [
        editorSettingsPanelOpen
    ] = useAppState('editorSettingsPanelOpen', false);

    return (
        <SideBar
            visible={editorStructurePanelOpen | editorSettingsPanelOpen}
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
