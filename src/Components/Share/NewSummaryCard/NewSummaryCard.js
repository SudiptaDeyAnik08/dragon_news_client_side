import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import { FaEye, FaRegBookmark,FaShare, FaStar } from 'react-icons/fa6';

function NewSummaryCard({ news }) {

  const { title, _id, author, details, image_url,rating,total_view } = news;
  const { img, name, published_date } = author;
  console.log(news)
  return (

    <Card className="mb-5">
      <Card.Header className='d-flex justify-content-between align-items-center'>
       
       <div className='d-flex'>
          <div>
            <Image className='me-3' src={img} roundedCircle style={{ height: '60px' }}></Image>
          </div>
          <div >
            <h5 className='mb-0'>{name}</h5>
            <p>{published_date}</p>
          </div>
        </div>
        <div >
          <FaRegBookmark className='m-2'></FaRegBookmark>
          <FaShare></FaShare>
        </div>
  
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img varient='top' src={image_url}></Card.Img>
        <Card.Text>
          {
            details.length > 250 ?
              <p>{details.slice(0, 250) + '....'} <Link to={`/news/${_id}`}> Read More </Link></p>
              :
              <p>{details}</p>
          }
        </Card.Text>
       
      </Card.Body>
      <Card.Footer className="d-flex  justify-content-between ">
        
     <div> 
        <FaStar></FaStar><span>{rating?.number}</span> 
      </div>
      
      <div>
        <FaEye></FaEye> <span>{total_view}</span>
      </div>
      </Card.Footer>
    </Card>
  )
}

export default NewSummaryCard