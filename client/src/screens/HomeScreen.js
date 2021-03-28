
import { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';



const HomeScreen = () => {

    const [products, setProducts] = useState([])

    const baseUrl = '/api/products';

    useEffect(() => {

        const fetchProducts = () => {
            fetch(baseUrl)
                .then(response => response.json())
                .then(data => setProducts(data))
        }

        fetchProducts()
    }, [])

    return (
        <>

            <h1>Latest Products</h1>
            <Row>
                {products.map((product) => (
                    <Col key={product._id} sm={12} md={6} lg={3}>
                        <Product product={product} />
                    </Col>
                ))}
            </Row>

        </>
    );
}

export default HomeScreen
