import React, { Fragment } from "react";
import { Container } from "react-bootstrap";


const Onee = () => {
    return <Fragment>
        <section>
            <Container className="justify-content-center">
                <img src="/images/color1.jpeg" alt="color1"></img>
                <img src="/images/color2.jpeg" alt='color2'></img>
            </Container>
        </section>
        <section>
            <p>Review:</p>
            <ul>
                <li>one</li>
                <li>two</li>
                <li>three </li>
            </ul>
        </section>
    </Fragment>
}

export default Onee;