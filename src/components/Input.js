import Form from 'react-bootstrap/Form'

import uuid from 'helpers/uuid'

const Input = ({ id = uuid(), value, label, update, ...props }) => (
    <Form.FloatingLabel label={label}>
        <Form.Control
            id={id}
            value={value}
            onChange={({ target: { value } }) => update(value)}
            {...props}
        />
    </Form.FloatingLabel>
)

export default Input
