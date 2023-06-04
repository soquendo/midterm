import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/ReduxStore';
import Box from '../components/Box';
import Text from '../components/Text';
import Button from '../components/Button';
import { clearCart } from '../redux/actions/cartActions';

function Checkout() {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        console.log('Product data:', data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching product data:', error);
        setIsLoading(false);
      });
  }, []);

  const handlePlaceOrder = () => {
    setIsLoading(true);
    setTimeout(() => {
      dispatch(clearCart());
      setIsOrderPlaced(true);
      setIsLoading(false);
    }, 2000);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (cartItems.length === 0) {
    return <div>Your shopping cart is empty.</div>;
  }

  if (isOrderPlaced) {
    return (
      <div>
        <h1>Order Placed</h1>
        <div>Your order has been successfully placed!</div>
      </div>
    );
  }

  return (
    <div>
      <h1>Checkout</h1>
      {cartItems.map((item) => (
        <div key={item.id}>
          <Box size="large" bgColor="#d3d3d3">
            <Text>{item.title}</Text>
            <Text>Price: ${item.price}</Text>
            <Text>Quantity: {item.quantity}</Text>
          </Box>
        </div>
      ))}
      <Button onClick={handlePlaceOrder}>Place Order</Button>
    </div>
  );
}

export default Checkout;
