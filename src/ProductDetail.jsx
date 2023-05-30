import { useParams } from 'react-router-dom';
import { useFetch } from './hooks/useFetch';
import { useNavigate } from 'react-router-dom';
import Box from './Box';
import Text from './Text';
import Image from './Image';
import Button from './components/Button';

function ProductDetail() {
  
    const navigate = useNavigate();

    const back = () => {
        navigate('../products');
    };

    const { id } = useParams();
    const { data: product, loading, error } = useFetch(`products/${id}`);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }
  

  return (<div>
    <Box size="large" bgColor = "#d3d3d3">
        <Image size="m" src={product.image} alt={product.title} />
        <div>
            <Text size = "l" color = "black"><b>{product.title}</b></Text>
            <Text size = "m" color = "black">{product.category}</Text>
            <Text size = "m" color = "black">{product.description}</Text>
            <Button onClick={() => back()}>Back</Button>
        </div>
    </Box>
    </div>);
}

export default ProductDetail
