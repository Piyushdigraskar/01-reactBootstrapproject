import React from "react";

import { Navbar, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <Navbar bg='dark' variant='dark' expand='lg' className="mb-4">
            <Container className="justify-content-center">
                <NavLink to='/home' className="nav-link text-light mx-2">Home</NavLink>
                <NavLink to='/' className="nav-link text-light mx-2">Store</NavLink>
                <NavLink to='/about' className="nav-link text-light mx-2">About</NavLink>
                <NavLink to='/contact' className="nav-link text-light mx-2">Contact-us</NavLink>
            </Container>
        </Navbar>
    )
}

export default Header;