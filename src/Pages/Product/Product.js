import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Product.css'

const Product = ({ product }) => {
    const { name, img, _id,description,rating,price } = product;
    return (
        <div>
            <Col>
                <Card className="cards">
                <img src={img} alt="" />
                                <Card.Body>
                                    <Card.Title className="text-bold">Name: {name}</Card.Title>
                                    <Card.Text>
                                      Price: ${price}
                                    </Card.Text>
                                    <Card.Text>
                                       {description}
                                    </Card.Text>
                                    <Card.Text>
                                       Rating: {rating}
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <NavLink to={`/placeOrder/${_id}`}>
                                        <button>Buy Now</button>
                                    </NavLink>
                                </Card.Footer>
                </Card>
            </Col>
        </div>
    );
};

export default Product;