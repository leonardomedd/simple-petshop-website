// components/Cart.js
import React, { useContext } from 'react';
import { Container, Button, ListGroup } from 'react-bootstrap';
import { CartContext } from '../CartContext';

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <Container className="my-5">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ListGroup>
          {cart.map((item, index) => (
            <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
              <div>
                {item.name} - ${item.price.toFixed(2)}
              </div>
              <Button variant="danger" onClick={() => removeFromCart(item.id)}>
                Remove
              </Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </Container>
  );
};

export default Cart;