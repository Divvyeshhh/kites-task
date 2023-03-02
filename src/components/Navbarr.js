import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'

export default function Navbarr() {
  return (
    <>
        <Navbar className='shadow-sm p-3 mb-5 bg-white rounded'>
            <Container>
                <Navbar.Brand href='/'>Kites task</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse>
                    <Nav className="ms-auto">
                        <Nav.Link href='/products'>Products</Nav.Link>
                        <Nav.Link href='/users'>Users</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>   
    </>
  )
}
