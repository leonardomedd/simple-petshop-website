// components/Products.js
import React, { useContext } from 'react';
import { Container, Button, Row, Col, Card } from 'react-bootstrap';
import { CartContext } from '../CartContext';
import productImage1 from '../images/product1.jpg';
import productImage2 from '../images/product2.png';
import productImage3 from '../images/product3.png';

function Products() {
  const { addToCart } = useContext(CartContext);

  const products = [
    { id: 1, name: 'Product 1', description: 'Description of Product 1', price: 10.00, image: productImage1 },
    { id: 2, name: 'Product 2', description: 'Description of Product 2', price: 20.00, image: productImage2 },
    { id: 3, name: 'Product 3', description: 'Description of Product 3', price: 30.00, image: productImage3 },
  ];

  const handleBuyNow = (product) => {
    addToCart(product);
  };

  return (
    <Container className="my-5">
      <Row>
        <Col>
          <h1>Our Products</h1>
          <p>Check out our amazing products.</p>
        </Col>
      </Row>
      <Row>
        {products.map(product => (
          <Col md={4} key={product.id}>
            <Card>
              <Card.Img variant="top" src={product.image} alt={product.name} className="product-image" />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>Price: ${product.price.toFixed(2)}</Card.Text>
                <Button variant="primary" className="btn btn-primary" onClick={() => handleBuyNow(product)}>Buy Now</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Products;