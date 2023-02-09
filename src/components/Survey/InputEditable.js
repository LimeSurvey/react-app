import { useState } from 'react'
import Form from 'react-bootstrap/Form'

import uuid from 'helpers/uuid'

const InputEditable = ({ id = uuid(), value, label, update, ...props }) => {
    const [ editing, setEditing ] = useState(false)

    const input = <Form.Control
        id={id}
        autoFocus
        defaultValue={value}
        onKeyDown={(e) => {
            if (e.keyCode == 13 && e.shiftKey == false) {
                e.preventDefault();
                setEditing(false)
                update(e.target.value)
            }
        }}
        onBlurCapture={(e) => {
            setEditing(false)
            update(e.target.value)
        }}
        {...props}
    />

    const text = <span onClick={() => setEditing(true)}>{value}</span>

    return editing ? input : text
}

export default InputEditable
