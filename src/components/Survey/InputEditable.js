import { useState } from 'react'
import Form from 'react-bootstrap/Form'

import uuid from 'helpers/uuid'

const InputEditable = ({ id = uuid(), value, displayValue, label, update, ...props }) => {
    const [ editing, setEditing ] = useState(false)

    const input = <Form.Control
        id={id}
        autoFocus
        defaultValue={value}
        onKeyDown={(e) => {
            if (e.keyCode == 13 && e.shiftKey == false) {
                e.preventDefault()
                if (editing) {
                    update(e.target.value)
                }
                setEditing(false)
            }
        }}
        onBlurCapture={(e) => {
            e.preventDefault()
            if (editing) {
                update(e.target.value)
            }
            setEditing(false)
        }}
        {...props}
    />

    return editing
        ? input
        : <div onClick={() => setEditing(true)}>{displayValue ? displayValue : value}</div>
}

export default InputEditable
