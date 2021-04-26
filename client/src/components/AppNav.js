import React from 'react';

import { Link } from 'react-router-dom'
import { Navbar, Container, NavbarToggler, Collapse, Nav } from "reactstrap";

const AppNavbar = () => {
    return (
        <>
            <Navbar color="dark" expand="lg" className="sticky-top">
                <Container>
                    <Link to="/" className="text-white text-decoration-none">
                        Side Project's Blog
                    </Link>
                    <NavbarToggler/>
                    <Collapse isOpen={true} navbar>
                        <Nav className="ml-auto d-flex justify-content-around" navbar></Nav>
                        {true ? <h1>authLink</h1> : <h1>guestLink</h1>}
                    </Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default AppNavbar
