import React from 'react'
import { Button, ButtonGroup, ListGroup } from 'react-bootstrap'
import { FaGoogle, FaGithub,FaFacebook,FaTwitter,FaWhatsapp , FaTwitch} from "react-icons/fa6";
import BrandCarusel from '../Carusel/BrandCarusel';

function RightSideNav() {
  return (
    <div>
      <ButtonGroup vertical>
        <Button variant="outline-primary mb-2"><FaGoogle></FaGoogle> Login In with Google</Button>
        <Button variant="outline-dark"><FaGithub></FaGithub> Login In with GitHub</Button>

      </ButtonGroup>
      <div>
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