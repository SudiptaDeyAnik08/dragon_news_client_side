import React, { useContext } from 'react'
import { Button, ButtonGroup, ListGroup } from 'react-bootstrap'
import { FaGoogle, FaGithub,FaFacebook,FaTwitter,FaWhatsapp , FaTwitch} from "react-icons/fa6";
import BrandCarusel from '../Carusel/BrandCarusel';
import { AuthContextProvider } from '../../../context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

function RightSideNav() {

    const {providerLogin} = useContext(AuthContextProvider)

  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = ()=>{
    providerLogin(googleProvider)
    .then(result => {
      const user = result.user;
      console.log(user)
    })
    .catch( e =>{
      console.error(e);
    })
  }

  return (
    <div>
      <ButtonGroup vertical>
        <Button onClick={handleGoogleSignIn} variant="outline-primary mb-2"><FaGoogle></FaGoogle> Login In with Google</Button>
        <Button variant="outline-dark"><FaGithub></FaGithub> Login In with GitHub</Button>

      </ButtonGroup>
      <div className='mt-3'>
        <h5>Find Us On</h5>
        <ListGroup>
         
          <ListGroup.Item className='mb-2'> <FaFacebook></FaFacebook> Facebook</ListGroup.Item>
          <ListGroup.Item className='mb-2'><FaTwitter></FaTwitter> Twitter</ListGroup.Item>
          <ListGroup.Item className='mb-2'><FaWhatsapp></FaWhatsapp> whats'app</ListGroup.Item>
          <ListGroup.Item className='mb-2'> <FaTwitch></FaTwitch> FaTwitch</ListGroup.Item>
        </ListGroup>
      </div>
      <BrandCarusel></BrandCarusel>
    </div>
  )
}

export default RightSideNav