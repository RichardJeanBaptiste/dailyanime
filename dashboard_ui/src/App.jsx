//import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './App.css'

/**
 * 
 * TODO:
 *  Fix Proxy
 */

function App() {

  return (
    <div className='login_root'>
      <div className='login_form'>
          <div className='login_container'>
            <h3 className='login_text'>Login Page</h3>
            <Form className='login_form2'>
              <Form.Group>
                <Form.Label>Username</Form.Label>
                <Form.Control type='text' placeholder='username'/>
              </Form.Group>

              <Form.Group id="p_input">
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' placeholder='password'/>
              </Form.Group>

              <Button>Login</Button>
            </Form>
            
          </div>
      </div>
    </div>
  )
}

export default App
