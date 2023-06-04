import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions';

function ProductsList({ products }) {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <p>Price: {product.price}</p>
          <p>Description: {product.description}</p>
          <p>Category: {product.category}</p>
          <img src={product.image} alt={product.title} />
          <p>Rating: {product.rating.rate}</p>
          <p>Rating Count: {product.rating.count}</p>
          <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default ProductsList;
