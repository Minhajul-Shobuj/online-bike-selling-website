import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';

const Home = () => {
    const [products] = useProducts();
    const product = products.slice(9);
    const [review,setRivew]=useState([]);

    useEffect(()=>{
        fetch('https://nameless-wave-90962.herokuapp.com/reviews').then(res=>res.json()).then(data=>setRivew(data));
    },[])
    return (
        <div >
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
            </div>
            <div className="container mt-5">
            <Row xs={1} md={2} lg={3} className="g-4">
                {
                    review.map(element =>
                        < Col key={element._id} >
                            <Card className="cards">
                                <Card.Body>
                                    <Card.Title>{element.ProductName}</Card.Title>
                                    <Card.Text>
                                        {element.description}
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                               Rating: {element.rating}
                                </Card.Footer>
                            </Card>
                        </Col>
                    )
                }
            </Row>
            </div>
        </div >
    );
};

export default Home;