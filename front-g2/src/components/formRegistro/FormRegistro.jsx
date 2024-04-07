import { Card, Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from ""
const FormRegistro = () => {
  return (
    <>
      <Card className='m-5 p-5'>
        <Form>
          <h2>Crea una cuenta</h2>
          <Form.Group>
            <Form.Label>Nombre</Form.Label>
            <FontAwesomeIcon icon={faUser} />
            <Form.Control type='text'/>
          </Form.Group>

          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control type='email'/>
          </Form.Group>

          <Form.Group>
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type='password'/>
          </Form.Group>

          <Button type='submit'>registrar</Button>

        </Form>
      </Card>
    </>
  )
}

export default FormRegistro
