import React from 'react'
import SideBar from 'components/SideBar'
import SurveyStructure from 'components/SurveyStructure'
import './SideBarLeft.scss'
import Button from 'react-bootstrap/Button'
import * as Icon from 'react-bootstrap-icons'
import classNames from 'classnames'
import useAppState from 'hooks/useAppState'

function SideBarLeft() {
    const [
        editorStructurePanelOpen,
        setEditorStructurePanelOpen
    ] = useAppState('editorStructurePanelOpen', false);

    return (
        <SideBar
            visible={editorStructurePanelOpen}
            className={classNames(
                'sidebar',
                'sidebar-left'
            )}>
            <SideBar.Header>
                Structure
                <Button
                    variant="link"
                    className={classNames('m-1')}
                    style={{padding: 0}}
                    onClick={() => setEditorStructurePanelOpen(false)}>
                    <Icon.XLg color='black' size={20} />
                </Button>
            </SideBar.Header>
            <SurveyStructure>Structure here</SurveyStructure>
        </SideBar>
    )
}

export default SideBarLeft
