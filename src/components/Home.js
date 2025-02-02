import React from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import dogImage from '../images/dog.jpg';

function Home() {
  return (
    <Container className="my-5">
      <Row className="align-items-center">
        <Col md={6}>
          <h1>Welcome to PetShop</h1>
          <p>Your one-stop shop for all your pet needs.</p>
          <Button variant="primary" className="button-primary" href="/products">Shop Now</Button>
        </Col>
        <Col md={6}>
          <img src={dogImage} className="img-fluid rounded" alt="PetShop" />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;