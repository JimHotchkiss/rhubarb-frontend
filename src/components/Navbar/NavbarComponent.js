import React from "react"
import "./NavbarComponent.css"
import { Navbar, Nav, Container } from "react-bootstrap"
import { Link } from "react-router-dom"

function NavbarComponent() {
  return (
    <Navbar expand='lg' variant='dark' bg='dark'>
      <Container>
        <Link to={`/`}>
          <Navbar.Brand href='#'>
            <h2 className='text-primary'>Rhubarb</h2>
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='ml-auto'>
            <Nav.Link href='#reviews'>Reviews</Nav.Link>
            <Nav.Link href='#discussions'>Discussions</Nav.Link>
            <Nav.Link href='#now-playing'>Now Playing</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarComponent
