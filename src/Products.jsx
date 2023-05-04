import React from 'react';
import { Link } from 'react-router-dom';
import { useFetch } from './hooks/useFetch';
import Box from './Box';
import Text from './Text';
import Image from './Image';
import Button from './Button';

function Products() {

    const { data: product, loading, error } = useFetch('products');

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <h1>Products</h1>
            {product.map((product) => (
                <div key={product.id}>
                    <Box size="large" bgColor = "#d3d3d3">
                    <Link to={`/productdetail/${product.id}`}>
                        <Image src={product.image} alt={product.title} />
                        <h2>{product.title}</h2>
                        <Text>{product.description}</Text>
                        <Text>Price: ${product.price}</Text>
                        <Text>Category: {product.category}</Text>
                        <Text>
                            Rating: {product.rating.rate} ({product.rating.count} reviews)
                        </Text>
                    </Link>
                    </Box>
                </div>
            ))}
        </div>
    );
}

export default Products;
