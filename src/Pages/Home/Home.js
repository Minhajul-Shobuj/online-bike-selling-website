import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';

const Home = () => {
    const [products] = useProducts();
    const product = products.slice(9);
    return (
        <div className="container">
            <Row xs={1} md={2} lg={3} className="g-4">
                {
                    product.map(element =>
                        < Col key={element._id} >
                            <Card className="cards">
                                <img src={element.img} alt="" />
                                <Card.Body>
                                    <Card.Title>{element.name}</Card.Title>
                                    <Card.Text>
                                        This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This content is a little bit longer.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <NavLink to={`/placeOrder/${element._id}`}>
                                        <button>Book Now</button>
                                    </NavLink>
                                </Card.Footer>
                            </Card>
                        </Col>
                    )
                }
            </Row>
        </div >
    );
};

export default Home;