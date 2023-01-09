import React from 'react'
import * as Icon from 'react-bootstrap-icons'
import './SurveyStructure.scss'
import Row from './Row'
import RowPinned from './RowPinned'
import RowQuestionGroup from './RowQuestionGroup'

const iconSize = 24

function SurveyStructure() {
    return (
        <>
            <RowPinned title="Welcome" />
            <RowQuestionGroup questionGroup={{name: 'Question Group 1'}}/>
            <RowQuestionGroup questionGroup={{name: 'Question Group 2'}}/>
            <RowQuestionGroup questionGroup={{name: 'Question Group 3'}}/>
            <RowPinned title="Thank you" />
        </>
    )
}

export default SurveyStructure
