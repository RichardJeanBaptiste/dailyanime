import { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { supabase } from './utils';
import { useNavigate } from 'react-router';
import './App.css'


function App() {

  let navigate = useNavigate();

  useEffect(() => {

    const { data } = supabase.auth.onAuthStateChange((event, session) => {
      console.log(event, session)

      if( event === 'SIGNED_IN') {
        navigate('/homepage')
      } else {
        data.subscription.unsubscribe()
      }
    })
  },[navigate]);

  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState(""); 

  const handleEmail = (e) => {
    setEmail(e.target.value);
  }

  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  const handleLogin = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password
    })

    if(error) {
      if(error.message == "Invalid login credentials") {
        alert("Invalid Login Credentials")
      }
    } else {
      console.log(data)
      navigate("/homepage")
    }
  }


  return (
    <div className='login_root'>
      <div className='login_form'>
          <div className='login_container'>
            <h3 className='login_text'>Login Page</h3>
            <Form className='login_form2'>
              <Form.Group>
                <Form.Label>Username</Form.Label>
                <Form.Control type='text' placeholder='username' onChange={handleEmail}/>
              </Form.Group>

              <Form.Group id="p_input">
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' placeholder='password' onChange={handlePassword}/>
              </Form.Group>

              <Button onClick={handleLogin}>Login</Button>
            </Form>
            
          </div>
      </div>
    </div>
  )
}

export default App
