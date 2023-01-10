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
            <Form.Control
                type="text"
                placeholder="Search for a question type"
                id="question-type-search"
            />
            <hr/>
            <h6>Popular</h6>
            <ListGroup variant="flush">
                <ListGroup.Item>Multiple Choice</ListGroup.Item>
                <ListGroup.Item>Free Text</ListGroup.Item>
            </ListGroup>
            <h6>Structure</h6>
            <ListGroup variant="flush">
                <ListGroup.Item>Question Group</ListGroup.Item>
            </ListGroup>
            <h6>Single Choice</h6>
            <ListGroup variant="flush">
                <ListGroup.Item>5 Point Choice</ListGroup.Item>
                <ListGroup.Item>Bootstrap Dropdown</ListGroup.Item>
                <ListGroup.Item>Image Select List (Radio)</ListGroup.Item>
                <ListGroup.Item>List (Dropdown)</ListGroup.Item>
                <ListGroup.Item>List (Radio)</ListGroup.Item>
            </ListGroup>
        </div>
    )
}

export default QuestionTypeSelector
