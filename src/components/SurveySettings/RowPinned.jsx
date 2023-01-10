import React from 'react'
import * as Icon from 'react-bootstrap-icons'
import Row from './Row'

const iconSize = 24

function RowPinned({title}) {
    return (
        <Row title={title} icon={<Icon.PinAngle size={iconSize}/>} style={{marginLeft: 20}}/>
    )
}

export default RowPinned

