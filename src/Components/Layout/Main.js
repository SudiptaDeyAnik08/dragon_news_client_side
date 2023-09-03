import React from 'react'
import { Outlet } from 'react-router-dom'
import {Col, Container,Row} from "react-bootstrap"
import Header from '../Share/Header/Header'
import LeftSideNav from '../Share/LeftSideNav/LeftSideNav'
import RightSideNav from '../Share/RightSideNav/RightSideNav'
import Footer from '../Share/Footer/Footer'

function Main() {
  return (
    <div>
      <Header></Header>
    <Container>
      <Row>
        <Col lg="2" className='d-none d-lg-block'>
          <LeftSideNav></LeftSideNav>
        </Col>
        <Col lg="7">

          <Outlet></Outlet>
        </Col>
        <Col lg="3">
        <RightSideNav></RightSideNav>
        </Col>
      </Row>
    </Container>
   <Footer> </Footer>
    </div>
  )
}

export default Main