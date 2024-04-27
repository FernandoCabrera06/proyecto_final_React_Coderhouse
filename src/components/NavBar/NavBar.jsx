import CartWidget from "../CartWidget/CartWidget"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import { NavLink } from "react-router-dom"
import "./NavBar.css"

const NavBar = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand to={`/`} as={NavLink}>
            Rocco Alimentos® 🐕
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                to={`/category/perros`}
                as={NavLink}
                className={({ isActive }) =>
                  isActive ? "navLink ActiveOption" : "navLink Option"
                }
              >
                Perros
              </Nav.Link>
              <Nav.Link
                to={`/category/aves`}
                as={NavLink}
                className={({ isActive }) =>
                  isActive ? "navLink ActiveOption" : "navLink Option"
                }
              >
                Aves
              </Nav.Link>
              <Nav.Link
                to={`/category/gatos`}
                as={NavLink}
                className={({ isActive }) =>
                  isActive ? "navLink ActiveOption" : "navLink Option"
                }
              >
                Gatos
              </Nav.Link>
              <Nav.Link
                to={`/category/reptiles`}
                as={NavLink}
                className={({ isActive }) =>
                  isActive ? "navLink ActiveOption" : "navLink Option"
                }
              >
                Reptiles
              </Nav.Link>
              <Nav.Link
                to={`/category/peces`}
                as={NavLink}
                className={({ isActive }) =>
                  isActive ? "navLink ActiveOption" : "navLink Option"
                }
              >
                Peces
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <CartWidget className="card-widget" />
      </Navbar>
    </>
  )
}

export default NavBar
