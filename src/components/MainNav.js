import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import vancity from "../img/vancity.png"
import './MainNav.css';
//#eb4238

const MainNav = () => {
  return (
    <Navbar expand="lg">
      <Navbar.Brand href="#home">
        <img
          alt=""
          src={vancity}
          width="80"
          height="50"
          className="d-inline-block align-top"
        />{' '}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="home">Wish List</Nav.Link>
          <Nav.Link href="#link">Statement</Nav.Link>
          <Nav.Link href="#link">Loan</Nav.Link>
          <Nav.Link href="#link">Test</Nav.Link>
        </Nav>

      </Navbar.Collapse>
    </Navbar>
  )

};

export default MainNav;