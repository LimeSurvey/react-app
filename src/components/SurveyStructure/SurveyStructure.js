import React from 'react'
import classNames from 'classnames'
import Button from 'react-bootstrap/Button'
import { XLg } from 'react-bootstrap-icons'

import SideBar from 'components/SideBar'
import useAppState from 'hooks/useAppState'

import RowPinned from './RowPinned'
import RowQuestionGroup from './RowQuestionGroup'
import './SurveyStructure.scss'

const iconSize = 24

function SurveyStructure() {
    const [
        editorStructurePanelOpen,
        setEditorStructurePanelOpen
    ] = useAppState('editorStructurePanelOpen', false);

    return editorStructurePanelOpen ? (
        <div className={classNames('survey-structure')}>
            <SideBar.Header>
                Structure
                <Button
                    variant="link"
                    className={classNames('m-1')}
                    style={{padding: 0}}
                    onClick={() => setEditorStructurePanelOpen(false)}>
                    <XLg color='black' size={20} />
                </Button>
            </SideBar.Header>
            <RowPinned title="Welcome" />
            <RowQuestionGroup questionGroup={{name: 'Question Group 1'}}/>
            <RowQuestionGroup questionGroup={{name: 'Question Group 2'}}/>
            <RowQuestionGroup questionGroup={{name: 'Question Group 3'}}/>
            <RowPinned title="Thank you" />
       </div>
    ) : null
}

export default SurveyStructure
