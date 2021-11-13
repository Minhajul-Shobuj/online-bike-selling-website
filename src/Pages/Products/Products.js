import React from 'react';
import { Row } from 'react-bootstrap';
import useProducts from '../../hooks/useProducts';
import Product from '../Product/Product';

const Products = () => {
    const [products] = useProducts();
    return (
        <div className="container mt-3 mb-2">
            <Row xs={1} md={2} lg={3} className="g-4">
                {
                    products.map(product => <Product key={product._id} product={product}></Product>)
                }
            </Row>
        </div>
    );
};

export default Products;