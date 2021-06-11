import React from "react"
import "./NavbarComponent.css"
import { Navbar, Nav, Container } from "react-bootstrap"

function NavbarComponent() {
  return (
    <Navbar expand='lg' variant='dark' bg='dark'>
      <Container>
        <Navbar.Brand href='#'>
          <h2 className='text-primary'>Rhubarb</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='ml-auto'>
            <Nav.Link smooth href='#reviews'>
              Reviews
            </Nav.Link>
            <Nav.Link href='#discussions'>Discussions</Nav.Link>
            <Nav.Link href='#now-playing'>Now Playing</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarComponent
