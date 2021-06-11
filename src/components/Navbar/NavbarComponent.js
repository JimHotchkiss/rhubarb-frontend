import React from "react"
import "./NavbarComponent.css"
import { Navbar, Nav, Container, Image } from "react-bootstrap"
import Rhubarb from "./img/rhubarb-blue.png"

function NavbarComponent() {
  return (
    <Navbar expand='lg' variant='dark' bg='dark'>
      <Container>
        <Navbar.Brand href='#'>
          <Image src={Rhubarb} width='150' height='65' fluid />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='ml-auto'>
            <Nav.Link href='#reviews'>Reviews</Nav.Link>
            <Nav.Link href='#discussions'>Discussions</Nav.Link>
            <Nav.Link href='#now_playing'>Now Playing</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarComponent
