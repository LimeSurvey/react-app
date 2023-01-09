import uuid from 'helpers/uuid'
import Form from 'react-bootstrap/Form'

const Input = ({ name = uuid(), value, label, update, ...props }) => (
  <Form.FloatingLabel label={label}>
    <Form.Control
      id={name}
      value={value}
      onChange={({ target: { value } }) => update(value)}
      {...props}
    />
  </Form.FloatingLabel>
)

export default Input
