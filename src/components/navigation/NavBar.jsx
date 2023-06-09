import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import "./NavBar.scss";
import { Link } from "react-router-dom";
import Badge from "@mui/material/Badge";
import { ShoppingCart } from "@mui/icons-material";
import DrawerContainer from "../drawer/DrawerContainer";
import { useSelector } from "react-redux";

const NavBar = () => {
  const [state, setState] = useState({
    showDrawer: false,
  });
  const toggleDrawer = e => {
    e.preventDefault();
    setState(prev => {
      return {
        ...prev,
        showDrawer: !prev.showDrawer,
      };
    });
  };

  const data = useSelector(state => state.cart);

  return (
    <>
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
              <Link className="nav-link" onClick={e => toggleDrawer(e)}>
                <Nav.Item>
                  {data.length > 0 && (
                    <Badge badgeContent={data.length} color="success">
                      <ShoppingCart color="light" />
                    </Badge>
                  )}
                </Nav.Item>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <DrawerContainer isOpen={state.showDrawer} onToggle={toggleDrawer} />
    </>
  );
};

export default NavBar;
