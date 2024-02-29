import React, { Fragment } from "react";
import { Container } from "react-bootstrap";

const Two = () => {
    return <Fragment>
        <section>
            <Container className="justify-content-center">
                <img src="/images/bny1.jpeg" alt="bny1"></img>
                <img src="/images/bny2.jpeg" alt="bny2"></img>
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

export default Two;