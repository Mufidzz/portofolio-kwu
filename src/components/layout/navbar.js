import React from "react";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import logo from "../static/oflite.png";
import {Link} from "react-router-dom";

class MyNav extends React.Component {
    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">

                    <Container>
                        <Navbar.Brand href="#home">
                            <Link to="/" className="nav-link">
                                <img
                                    src={logo}
                                    width="50"
                                    height="50"
                                    className="d-inline-block align-top"
                                    alt="React Bootstrap logo"
                                />
                            </Link>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <Link to="/" className="nav-link">
                                    Home
                                </Link>
                                <Link to="/product" className="nav-link">
                                    Product
                                </Link>
                                <Link to="/service" className="nav-link">
                                    Service
                                </Link>
                                <Link to="/contact" className="nav-link">
                                    Contact
                                </Link>
                            </Nav>
                            <Nav>
                                <Button variant="order" size="m" active>
                                    Order
                                </Button>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}

export default MyNav;
