import React from 'react';
import { Navbar, Button, Nav, NavLink } from 'react-bootstrap';

function NaviBar() {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand>Web Dev Blog</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav"></Navbar.Toggle>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <NavLink>Home</NavLink>
          <NavLink>Users</NavLink>
          <NavLink>About</NavLink>
        </Nav>
        <Nav>
          <Button variant="primary">Log In</Button>
          <Button variant="primary">Sign Out</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </>
  )
}

export default NaviBar;