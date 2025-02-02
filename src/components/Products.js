import React from 'react';
import { Container, Button, Row, Col, Card } from 'react-bootstrap';
import productImage1 from '../images/product1.jpg'; // Substitua pelo caminho correto da imagem
import productImage2 from '../images/product2.png'; // Substitua pelo caminho correto da imagem
import productImage3 from '../images/product3.png'; // Substitua pelo caminho correto da imagem

function Products() {
  return (
    <Container className="my-5">
      <Row>
        <Col>
          <h1>Our Products</h1>
          <p>Check out our amazing products.</p>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src={productImage1} alt="Product 1" className="product-image" />
            <Card.Body>
              <Card.Title>Product 1</Card.Title>
              <Card.Text>Description of Product 1.</Card.Text>
              <Button variant="primary" className="btn btn-primary">Buy Now</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src={productImage2} alt="Product 2" className="product-image" />
            <Card.Body>
              <Card.Title>Product 2</Card.Title>
              <Card.Text>Description of Product 2.</Card.Text>
              <Button variant="primary" className="btn btn-primary">Buy Now</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src={productImage3} alt="Product 3" className="product-image" />
            <Card.Body>
              <Card.Title>Product 3</Card.Title>
              <Card.Text>Description of Product 3.</Card.Text>
              <Button variant="primary" className="btn btn-primary">Buy Now</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Products;