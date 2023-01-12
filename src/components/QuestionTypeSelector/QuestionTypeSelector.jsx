import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import * as Icon from 'react-bootstrap-icons'
import classNames from 'classnames'
import './QuestionTypeSelector.scss'


function QuestionTypeSelector() {
    return (
        <div className={classNames('question-type-selector')}>
            <div className="search">
                <Form.Control
                    type="text"
                    placeholder="Search for a question type"
                    id="question-type-search"
                />
                <hr/>
            </div>
            <div className="list">
                <h6>Popular</h6>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <Icon.List/> Multiple Choice
                    </ListGroup.Item>
                    <ListGroup.Item><Icon.List/> Free Text</ListGroup.Item>
                </ListGroup>
                <h6>Structure</h6>
                <ListGroup variant="flush">
                    <ListGroup.Item><Icon.Collection/> Question Group</ListGroup.Item>
                </ListGroup>
                <h6>Single Choice</h6>
                <ListGroup variant="flush">
                    <ListGroup.Item><Icon.List/> 5 Point Choice</ListGroup.Item>
                    <ListGroup.Item><Icon.Bootstrap/> Bootstrap Dropdown</ListGroup.Item>
                    <ListGroup.Item><Icon.Images/> Image Select List (Radio)</ListGroup.Item>
                    <ListGroup.Item><Icon.List/> List (Dropdown)</ListGroup.Item>
                    <ListGroup.Item><Icon.List/> List (Radio)</ListGroup.Item>
                </ListGroup>
            </div>
        </div>
    )
}

export default QuestionTypeSelector
