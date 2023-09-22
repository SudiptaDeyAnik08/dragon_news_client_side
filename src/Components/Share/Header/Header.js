import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import { Link } from 'react-router-dom';
import { AuthContextProvider } from '../../../context/AuthProvider/AuthProvider';
import { FaUser } from 'react-icons/fa6';
import { Image } from 'react-bootstrap';





function Header() {
  const { user, logOut } = useContext(AuthContextProvider);
  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(e => console.error(e))
  }
  return (
    <div>

      <Navbar expand="lg" className="bg-body-tertiary mb-4">
        <Container>
          <Navbar.Brand ><Link to='/'>Dragon News</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav.Link>

              {
                user?.uid ?
                  <>
                    <span>{user?.displayName}</span>
                    <button onClick={handleLogOut}>LogOut</button>
                  </>
                  : <>
                    <Link to='/login'>Login</Link>
                    <Link to='/register'>Register</Link>
                  </>
              }

              <Link to='/profile'>
                {user?.photoURL ?
                  <Image style={{ height: '30px' }} roundedCircle src={user.photoURL}></Image> : <FaUser></FaUser>
                }
              </Link>
            </Nav.Link>
            <div className='d-lg-none '>
              <LeftSideNav></LeftSideNav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </div>
  )
}

export default Header