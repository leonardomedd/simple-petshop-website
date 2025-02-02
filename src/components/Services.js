import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';

function Services() {
  return (
    <Container>
      <h1>Our Services</h1>
      <ListGroup>
        <ListGroup.Item>Grooming</ListGroup.Item>
        <ListGroup.Item>Veterinary Services</ListGroup.Item>
        <ListGroup.Item>Pet Training</ListGroup.Item>
        <ListGroup.Item>Pet Boarding</ListGroup.Item>
      </ListGroup>
    </Container>
  );
}

export default Services;