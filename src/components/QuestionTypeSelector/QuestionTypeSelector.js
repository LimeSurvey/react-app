import React from 'react'
import Form from 'react-bootstrap/Form'
import ListGroup from 'react-bootstrap/ListGroup'
import {
    List,
    Bootstrap,
    Collection,
    Images
} from 'react-bootstrap-icons'
import './QuestionTypeSelector.scss'


function QuestionTypeSelector() {
    return (
        <div className="question-type-selector">
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
                    <ListGroup.Item><List/> Multiple Choice</ListGroup.Item>
                    <ListGroup.Item><List/> Free Text</ListGroup.Item>
                </ListGroup>
                <h6>Structure</h6>
                <ListGroup variant="flush">
                    <ListGroup.Item><Collection/> Question Group</ListGroup.Item>
                </ListGroup>
                <h6>Single Choice</h6>
                <ListGroup variant="flush">
                    <ListGroup.Item><List/> 5 Point Choice</ListGroup.Item>
                    <ListGroup.Item><Bootstrap/> Bootstrap Dropdown</ListGroup.Item>
                    <ListGroup.Item><Images/> Image Select List (Radio)</ListGroup.Item>
                    <ListGroup.Item><List/> List (Dropdown)</ListGroup.Item>
                    <ListGroup.Item><List/> List (Radio)</ListGroup.Item>
                </ListGroup>
            </div>
        </div>
    )
}

export default QuestionTypeSelector
