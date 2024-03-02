import React, { Fragment } from "react";
import MainNav from "./MainNav";
import { Navbar, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <Fragment>
            <Navbar bg='dark' variant='dark' expand='lg' className="mb-4">
                <Container className="justify-content-center">
                    <NavLink to='/home' className="nav-link text-light mx-2">Home</NavLink>
                    <NavLink to='/store' className="nav-link text-light mx-2">Store</NavLink>
                    <NavLink to='/about' className="nav-link text-light mx-2">About</NavLink>
                    <NavLink to='/contact' className="nav-link text-light mx-2">Contact-us</NavLink>
                </Container>
            </Navbar>
            <MainNav></MainNav>
        </Fragment>
    )
}

export default Header;