import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import "./NavBar.scss";
import { Link } from "react-router-dom";
import Badge from '@mui/material/Badge';
import { ShoppingCart } from "@mui/icons-material";

const NavBar = () => (
  <Navbar expand="lg" sticky="top">
    <Container fluid>
      <Navbar.Brand href="#">
        <Image src="vite@2x.png" alt="Nans logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0 justify-content-end"
          style={{ width: "100%" }}
          navbarScroll
        >
          <Link to="/" className="nav-link">
            <Nav.Item>Home</Nav.Item>
          </Link>
          <Link to="/about" className="nav-link">
            <Nav.Item>About</Nav.Item>
          </Link>
          <Link to="/contact" className="nav-link">
            <Nav.Item>Contact</Nav.Item>
          </Link>
          <Link className="nav-link">
            <Nav.Item>Login</Nav.Item>
          </Link>
          <Link className="nav-link">
            <Nav.Item>
              <Badge badgeContent={4} color="success">
                <ShoppingCart color="light" />
              </Badge>
            </Nav.Item>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default NavBar;
