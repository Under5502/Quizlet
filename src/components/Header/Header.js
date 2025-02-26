import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <NavLink to="/" className="navbar-brand">
          Under
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className="nav-link" active="true">
              Home
            </NavLink>
            <NavLink to="/users" className="nav-link" active="true">
              Users
            </NavLink>
            <NavLink to="/admins" className="nav-link" active="true">
              Admin
            </NavLink>
          </Nav>
          <Nav>
            <button className="login-btn">Log in</button>
            <button className="signup-btn">Sign up</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
