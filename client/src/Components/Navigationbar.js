import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const Navigationbar = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg" >
                <Container fluid>
                    <Navbar.Brand href="#">List of contacts</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: "100px" }}
                            navbarScroll
                        >
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/add">ADD</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigationbar;
