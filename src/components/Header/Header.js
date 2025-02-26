import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
<<<<<<< HEAD
=======
import { NavLink, Link } from "react-router-dom";
>>>>>>> 6090b5e (commit)

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
<<<<<<< HEAD
        <Navbar.Brand href="#home">Under</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#users">Users</Nav.Link>
            <Nav.Link href="#admin">Admin</Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown title="Setting" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Log in</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Log out</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Profile</NavDropdown.Item>
            </NavDropdown>
=======
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
>>>>>>> 6090b5e (commit)
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
