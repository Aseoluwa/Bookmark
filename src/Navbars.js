/** @format */

import React from "react";
import "./Navbars.css";
import { Nav, Navbar, Container } from "react-bootstrap";
import logo from "./IMAGES/logo-bookmark.svg";

const Navbars = () => {
  return (
    <div className='Nav'>
      <Navbar expand='lg'>
        <Container>
          <Navbar.Brand href='#home'>
            <img src={logo} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link href='#home'>FEATURES</Nav.Link>
              <Nav.Link href='#home'>PRICING</Nav.Link>
              <Nav.Link href='#link'>CONTACT</Nav.Link>
              <div className='btndiv'>
                <button className='Btn' href>
                  Login
                </button>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbars;
