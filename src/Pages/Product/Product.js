import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Product.css'

const Product = ({ product }) => {
    const { name, img, _id } = product;
    return (
        <div>
            <Col>
                <Card className="cards">
                    <img src={img} alt="" />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <NavLink to={`/placeOrder/${_id}`}>
                            <button>Book Now</button>
                        </NavLink>
                    </Card.Footer>
                </Card>
            </Col>
        </div>
    );
};

export default Product;