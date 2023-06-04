import React from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import Box from '../components/Box';
import Text from '../components/Text';
import Image from '../components/Image';
import Button from '../components/Button';
import ProductsList from '../components/ProductsList';

function Products() {
  const { data: products, loading, error } = useFetch('products');

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Products</h1>
      <ProductsList products={products} />
    </div>
  );
}

export default Products;
