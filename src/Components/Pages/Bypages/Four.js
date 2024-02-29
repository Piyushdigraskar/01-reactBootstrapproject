import React, { Fragment } from "react";
import { Container } from "react-bootstrap";

const Four = () => {
    return <Fragment>
        <section>
            <Container >
                <img src="/images/b1.jpeg" alt="b1"></img>
                <img src="/images/b2.jpeg" alt="b2"></img>
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

export default Four;