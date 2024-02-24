import React from "react";
import { Container, Navbar } from 'react-bootstrap';
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <Container className="justify-content-center">
                <Navbar.Brand >Home</Navbar.Brand>
                <Navbar.Brand >Store</Navbar.Brand>
                <NavLink as={NavLink} to='/about'>About</NavLink>
            </Container>
        </div>
    )
}

export default Header;