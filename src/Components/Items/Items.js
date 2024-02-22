import React from "react";
import { Button, Card, Row,Container,Col } from "react-bootstrap";

const Dummy_array = [
    {

        title: 'Colors',

        price: 100,

        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',

    },

    {

        title: 'Black and white Colors',

        price: 50,

        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',

    },

    {

        title: 'Yellow and Black Colors',

        price: 70,

        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',

    },

    {

        title: 'Blue Color',

        price: 100,

        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',

    }
]
const Items = () => {
    const itemList = Dummy_array.map((item, index) => (
      <Col key={index} className="mb-2">
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
            <Button variant="primary">Add to Cart</Button>
          </Card.Footer>
        </Card>
      </Col>
    ));
    return(
        <Container className="text-center">
        <h1>The generics</h1>
        <Row>
          {itemList}
        </Row>
      </Container>
    );
}

export default Items;