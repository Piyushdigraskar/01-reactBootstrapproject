import React, { Fragment } from "react";
import { Container } from "react-bootstrap";

const Three = () => {
    return <Fragment>
        <section>
            <Container className="justify-content-center">
                <img src="/images/yb1.jpeg" alt="yb1"></img>
                <img src="/images/yb2.jpeg" alt="yb2"></img>
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

export default Three;