import React from 'react'
import { GripVertical, CardList, ThreeDots, Sliders } from 'react-bootstrap-icons'
import Button from 'react-bootstrap/Button'

import Row from './Row'

const iconSize = 24

function RowQuestionGroup({questionGroup}) {

    const gripVertical = (
        <Button variant="link">
            <GripVertical size={iconSize} color={'grey'} style={{padding: 0}}/>
        </Button>
    )

    return (
        <Row
            title={questionGroup.name}
            icon={<CardList size={iconSize}/>}
            button={gripVertical}
            button2={
                <Button variant="link">
                    <ThreeDots size={iconSize} color={'grey'} style={{padding: 0}}/>
                </Button>
            }
        >
            <Row
                title="Question 1"
                icon={<Sliders size={iconSize}/>}
                button={gripVertical}
            />
            <Row
                title="Question 2"
                icon={<Sliders size={iconSize}/>}
                button={gripVertical}
            />
            <Row
                title="Question 3"
                icon={<Sliders size={iconSize}/>}
                button={gripVertical}
            />
        </Row>
    )
}

export default RowQuestionGroup

