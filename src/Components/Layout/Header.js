import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar,Container } from "react-bootstrap";



const Header = () => {
    return (
        <Navbar bg='dark' variant='dark' expand='lg' className="mb-4">
        <Container className="justify-content-center">
            <NavLink as={NavLink} to='/home'>Home</NavLink> 
            <NavLink as={NavLink} to='/'>Store</NavLink> 
            <NavLink as={NavLink} to='/about'>About</NavLink>
        </Container>
    </Navbar>
    )
}

export default Header;