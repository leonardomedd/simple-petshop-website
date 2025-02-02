import React from 'react';
import { Container, Button, Row, Col, Form } from 'react-bootstrap';

function Contact() {
  return (
    <Container className="my-5">
      <Row>
        <Col>
          <h1>Contact Us</h1>
          <p>We would love to hear from you!</p>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="formBasicMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button variant="primary" className="button-primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;