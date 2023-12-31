import React from 'react';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

import { Link, useLoaderData } from 'react-router-dom'

function News() {

  const news = useLoaderData();
  console.log(news);
  const { title, details, image_url,  category_id } = news
  return (

    <Card >
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          {details}
        </Card.Text>
        <Link to={`/category/${category_id}`}>
          <Button variant="primary">All the news Category</Button>

        </Link>
      </Card.Body>
    </Card>

  )
}

export default News