import React from "react";
import { Button, Container } from "react-bootstrap";

const Dummy = [
    {
        id: 1,
        date: 'JUL 16',
        location: 'DETROIT, MI',
        venue: 'DTE ENERGY MUSIC THEATRE'
    },
    {
        id: 2,
        date: 'JUL 19',
        location: 'TORONTO, ON',
        venue: 'BUDWEISER STAGE'
    },
    {
        id: 3,
        date: 'JUL 22',
        location: 'BRISTOW, VA',
        venue: 'JIGGY LUBE LIVE'
    },
    {
        id: 4,
        date: 'JUL 29',
        location: 'PHOENIX, AZ',
        venue: 'AK-CHIN PAVILION',
    },
    {
        id: 5,
        date: 'AUG 2',
        location: 'LAS VEGAS, NV',
        venue: 'T-MOBILE ARENA'
    },
    {
        id: 6,
        date: 'AUG 7',
        location: 'CONCORD, CA',
        venue: 'CONCORD PAVILION'
    }
];

const Home = () => {

    const venueList = Dummy.map((item) => (
        <li key={item.id} className="list-group-item">
            <div className="d-flex w-100 justify-content-between">
                <h3>{item.date}</h3>
                <div>{item.location}</div>
            </div>
            <div className="d-flex w-100 justify-content-between align-items-center">
                <div>{item.venue}</div>
                <Button variant="primary">Buy Tickets</Button>
            </div>
        </li>
    ));

    return (
        <Container className="justify-content-center">
        <h1>Venue</h1>
        <ul className="list-group">
            {venueList}
        </ul>
        </Container>
    );

}

export default Home;
