import React from "react";
import { Card, Row, Container, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
//import { useParams } from "react-router-dom";
import ItemForm from "./ItemForm";


const Dummy_array = [
    {
        id: 1,

        title: 'Colors',

        price: 100,

        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',

    },

    {
        id: 2,

        title: 'Black and white Colors',

        price: 50,

        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',

    },

    {
        id: 3,

        title: 'Yellow and Black Colors',

        price: 70,

        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',

    },

    {
        id: 4,

        title: 'Blue Color',

        price: 100,

        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',

    }
]
const Items = (props) => {
    //const params = useParams();
      
    const itemList = Dummy_array.map((item, index) => (
        <Col key={index} id={item.id} className="mb-2">
            <Link to={`/product/${item.id}`}>
            <Card style={{ width: '18rem' }}>
                <Card.Header>
                    <Card.Title>{item.title}</Card.Title>
                </Card.Header>
                <Card.Body>
                    <Card.Img variant="top" src={item.imageUrl} />
                    <Card.Text>
                        Price: ${item.price}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <ItemForm
                        id={item.title}
                        title={item.title}
                        price={item.price}
                    />
                </Card.Footer>
            </Card>
            </Link>
        </Col>
    ));
    return (
        <Container className="text-center">
            <h1>The generics</h1>
            <Row>
                {itemList}
            </Row>
        </Container>
    );
}

export default Items;