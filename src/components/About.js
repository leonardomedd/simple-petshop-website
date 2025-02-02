import React from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';

function AboutUs() {
  return (
    <Container className="my-5">
      <Row>
        <Col>
          <h1>About Us</h1>
          <p>Learn more about our company and values.</p>
          <Button variant="primary" className="button-primary" href="/contact">Contact Us</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutUs;