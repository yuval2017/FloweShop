import { Link, NavLink, useNavigate, useSearchParams } from "react-router-dom";
import React from "react";
import './componentsstyle.css'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { ORCHID_AND_BOQUET_PAGE } from "../constants/PagesConstants";
import { useSearch } from "../context/SearchProvider";

export default function Header() {
  const {searchParams} = useSearch()
  const typeFilter = searchParams.get("type")
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Orchid & Bouquet" id="basic-nav-dropdown">
              <NavDropdown.Item className={typeFilter === "orchid" ? "active-link" : ""} as={NavLink} to={ORCHID_AND_BOQUET_PAGE + "?type=orchid" }>Orchid</NavDropdown.Item>
              <NavDropdown.Item className={typeFilter === "1" ? "active-link" : ""}  as={NavLink} to={ORCHID_AND_BOQUET_PAGE + "?type=1" }>Bouquet</NavDropdown.Item>

              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
