import { useState } from 'react'
import Form from 'react-bootstrap/Form'

import uuid from 'helpers/uuid'

const InputEditable = ({ id = uuid(), value, displayValue, label, update, ...props }) => {
    const [ editing, setEditing ] = useState(false)

    const input = <Form.Control
        id={id}
        autoFocus
        defaultValue={value}
        onBlurCapture={(e) => {
            e.preventDefault()
            if (editing) {
                update(e.target.value)
            }
            setEditing(false)
        }}
        {...props}
    />

    const display = <div onClick={() => setEditing(true)}>{displayValue ? displayValue : value}</div>

    return editing
        ? input
        : display
}

export default InputEditable
