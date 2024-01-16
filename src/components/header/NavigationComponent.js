import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
} from "reactstrap";

const NavigationComponent = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const navToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div>
      <Navbar color="dark" dark expand="sm">
        <NavbarToggler onClick={navToggle} />
        <NavbarBrand href="/"> FancyRestaurent </NavbarBrand>
        <Collapse isOpen={isNavOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/menu" className="nav-link">
                Menu
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/about" className="nav-link">
                About Us
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/contact" className="nav-link">
                Contact Us
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavigationComponent;
