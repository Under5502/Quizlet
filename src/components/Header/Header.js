import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink, Link } from "react-router-dom";

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
            {/* <NavDropdown title="Setting" id="basic-nav-dropdown">
              <Link to="/login" className="nav-link">
                Log in
              </Link>
              <Link to="/logout" className="nav-link">
                Log out
              </Link>
              <Link to="/profiles" className="nav-link">
                Profile
              </Link>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
