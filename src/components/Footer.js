import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Facebook, Twitter, Instagram } from 'react-bootstrap-icons';

function Footer() {
  return (
    <footer className="text-center text-lg-start text-black">
      <Container className="p-4">
        <Row>
          <Col>
            <h5>Follow us on</h5>
            <a href="https://www.facebook.com" className="text-black me-2"><Facebook size={20} /></a>
            <a href="https://www.twitter.com" className="text-black me-2"><Twitter size={20} /></a>
            <a href="https://www.instagram.com" className="text-black me-2"><Instagram size={20} /></a>
          </Col>
        </Row>
        <Row>
          <Col className="text-center p-3">
            © 2025 PetShop | All rights reserved.
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;