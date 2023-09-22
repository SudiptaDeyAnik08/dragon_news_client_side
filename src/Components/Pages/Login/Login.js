import React, { useContext, useState } from 'react'

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { AuthContextProvider } from '../../../context/AuthProvider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';


function Login() {
  
  const [error,setError] = useState('');
  const {signIn} = useContext(AuthContextProvider)
  const navigate = useNavigate();
  
  const location  = useLocation();
  const from = location.state?.from?.pathname || '/'

  const handleSubmit = (e)=>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email,password)
    .then(result=>{
      const user = result.user;
      console.log(user);
      form.reset();
      setError(''); 
      if(user.emailVerified){

        navigate(from, {replace:true} );

      }
      else{
        toast.error('Your Email is not Verified.Please Verifty your email')
      }
    })
    .catch(error => {
      console.error(error);
       setError(error.message)
    })

  }

  return (
    <Form onSubmit={handleSubmit}>
      <Row className="align-items-center d-block">
        <Col sm={3} className="my-1 mb-3 w-100">
          <h5 className='pb-1'>Enter Your Email</h5>
          <Form.Label htmlFor="inlineFormInputName" visuallyHidden>
            Email
          </Form.Label>
          <Form.Control name="email" type="email" required id="inlineFormInputName" placeholder="sudipta@gmail.com" />
        </Col>


       

        <Col sm={3} className="my-1 w-100 mb-3">
        <h5 className='pb-1'>Enter Your Password</h5>
          <Form.Label htmlFor="inlineFormInputName" visuallyHidden>
            Password
          </Form.Label>
          <Form.Control name='password' required type='password' id="inlineFormInputName" placeholder="********" />
        </Col>

        <Col xs="auto" className="my-1">
          <Form.Check
            type="checkbox"
            id="autoSizingCheck2"
            label="Remember me"
          />
        </Col>
        <Col xs="auto" className="my-1">
          <Button type="submit">Submit</Button>
        </Col>

        <Col xs="auto" className="my-1">
         <h5 className='text-danger mt-4'>{error}</h5>
        </Col>
      </Row>
    </Form>
  )
}

export default Login;