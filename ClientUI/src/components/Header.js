import { Link, NavLink } from "react-router-dom";
import React from "react";
import './componentsstyle.css'
import {FLOWERS, FLOWERPOT_AND_ORCHID} from '../constants/FlowersCategorys'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FLOWERS_PAGE, ORCHID_AND_BOQUET_PAGE } from "../constants/PagesConstants";
import { useSearch } from "../context/SearchProvider";
import { firstCharToUpperrcase } from "../utils/StringUtils";
function createUrl(dest, params) {
  const searchParams = new URLSearchParams(params);
  return `${dest}?${searchParams.toString()}`;
}

export default function Header() {
  const {searchParams} = useSearch()
  const typeFilter = searchParams.get("type")
  
  function createDropDowntItems(types, dest){
    const ans = Object.entries(types).map(([key, value]) => {
      // Perform some transformation or operation on the value
      return (
        <NavDropdown.Item
          key={key}
          as={NavLink}
          className={typeFilter === value ? "active-link" : ""}
          to={createUrl(dest, { type: value })}
        >
          {firstCharToUpperrcase(value)}
        </NavDropdown.Item>
      );
    });
    return ans;
  }
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <NavDropdown title="Flowers" id="flowers-nav-dropdown">
              {createDropDowntItems(FLOWERS.types, FLOWERS_PAGE)}
            </NavDropdown>
            <NavDropdown title="Orchid & Bouquet" id="orchid&bouquet-nav-dropdown">
              {createDropDowntItems(FLOWERPOT_AND_ORCHID.types, ORCHID_AND_BOQUET_PAGE)}
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
