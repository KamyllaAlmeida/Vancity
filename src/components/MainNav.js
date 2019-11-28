import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';



const MainNav = () => {
  return (
    <Navbar  className="navbar navbar-dark bg-dark" expand="lg">
      <Navbar.Brand href="/">
          Vancity
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/wishList">Wish List</Nav.Link>
          <Nav.Link href="/statement">Statement</Nav.Link>
          <Nav.Link href="/loan">Loan</Nav.Link>
        </Nav>

      </Navbar.Collapse>
    </Navbar>
  )

};

export default MainNav;