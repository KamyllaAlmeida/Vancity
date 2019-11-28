import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom'


const MainNav = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">
        <Link to='/MainPage'>
          Vancity
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/wishList">Wish List</Nav.Link>
          <Nav.Link href="/statement">Statement</Nav.Link>
          <Nav.Link href="#loan">Loan</Nav.Link>
        </Nav>

      </Navbar.Collapse>
    </Navbar>
  )

};

export default MainNav;