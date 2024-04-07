import { Card, Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock} from '@fortawesome/free-solid-svg-icons';
import "./formRegistro.css"

const FormRegistro = () => {
  return (
    <>
      <Card className='m-5 p-5'>
        <Form className='conatiner'>
          <div className="title-header">
            <div className="title">Crea una cuenta</div>
            <div className="linea"></div>
          </div>
          <Form.Group className='inputs'>
            <div className="input">
            <FontAwesomeIcon className='icons' icon={faUser} />
            <Form.Control className='space' type='text' placeholder='Nombre'/>
            </div>
          </Form.Group>

          <Form.Group className='inputs'>
            <div className="input">
            <FontAwesomeIcon className='icons' icon={faEnvelope} />
            <Form.Control className='space' type='email' placeholder='Email'/>
            </div>
          </Form.Group>

          <Form.Group className='inputs'>
            <div className="input">
            <FontAwesomeIcon className='icons' icon={faLock} />
            <Form.Control className='space' type='password' placeholder='Contraseña'/>
            </div>
          </Form.Group>

          <div className="submit-container">
           <div className="submit">
             <Button type='submit'>registrar</Button>
             <Button type='submit'>Login</Button>
           </div>
          </div>

        </Form>
      </Card>
    </>
  )
}

export default FormRegistro
