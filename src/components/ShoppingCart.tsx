import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/ReduxStore';
import Box from '../components/Box';
import Text from '../components/Text';

function ShoppingCart() {
  const cartItems = useSelector((state: RootState) => state.cart.items);

  if (cartItems.length === 0) {
    return <div>Your shopping cart is empty.</div>;
  }

  return (
    <div>
      <h1>Shopping Cart</h1>
      {cartItems.map((item) => (
        <div key={item.id}>
          <Box size="large" bgColor="#d3d3d3">
            <Text>{item.title}</Text>
            <Text>Price: ${item.price}</Text>
            <Text>Quantity: {item.quantity}</Text>
          </Box>
        </div>
      ))}
    </div>
  );
}

export default ShoppingCart;
