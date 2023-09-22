import React, { useContext } from 'react'
import { AuthContextProvider } from '../../../../context/AuthProvider/AuthProvider'
import Form from 'react-bootstrap/Form';


function Profile() {
    const {user} = useContext(AuthContextProvider)
  return (
    <Form>
    <Form.Group className="mb-3" controlId="formGroupEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control readOnly defaultValue={user?.email} type="email" placeholder="Enter email" />
    </Form.Group>
    
    <Form.Group className="mb-3" controlId="formGroupPassword">
      <Form.Label>Name</Form.Label>
      <Form.Control defaultValue={user?.displayName} type="text" placeholder="Name" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formGroupEmail">
      <Form.Label>Photo URL</Form.Label>
      <Form.Control  defaultValue={user?.photoURL} type="text" placeholder="Enter Your Photo URL" />
    </Form.Group>
  </Form>
  )
}

export default Profile