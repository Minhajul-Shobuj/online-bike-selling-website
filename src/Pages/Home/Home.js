import React, { useEffect, useState } from 'react';
import { Card, Carousel, Col, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';

const Home = () => {
    const [products] = useProducts();
    const product = products.slice(8);
    const [review,setRivew]=useState([]);

    useEffect(()=>{
        fetch('https://nameless-wave-90962.herokuapp.com/reviews').then(res=>res.json()).then(data=>setRivew(data));
    },[])
    return (
        <div >
               <div className="mt-3">
            <h1 className="fw-bolder text-secondary">Always we tried to provided you the Best and Geniune Bikes</h1>
            </div>
            <div className="d-flex align-items-center justify-content-center my-3">
                <Carousel className=" w-50">
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://i.ibb.co/kVT57LB/3-Ecosse-ES1-Spirit-3-6-Million.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <p className="text-warning fw-bold">Ecosse-ES1-Spirit</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://i.ibb.co/LtKQY6r/8-Ecosse-Founder-u2019s-Edition-Ti-XX-300000.jpg"
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <p className="fw-bold text-warning">Ecosse-Founder-u2019s-Edition</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://i.ibb.co/kgMW9s8/14.jpg"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <p className="fw-bold text-warning">Dodge-Tomahawk-V10-Superbike</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://i.ibb.co/JHFftvf/15-NCR-Leggera-1200-Titanium-Special-148000.jpg"
                            alt="Fourth slide"
                        />
                        <Carousel.Caption>
                            <p className="fw-bold text-warning">Dodge-Tomahawk-V10-Superbike</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://i.ibb.co/LtKQY6r/8-Ecosse-Founder-u2019s-Edition-Ti-XX-300000.jpg"
                            alt="Fifth slide"
                        />
                        <Carousel.Caption>
                            <p className="fw-bold text-warning">Dodge-Tomahawk-V10-Superbike</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                </div>
            <div className="container mt-3">
                <h1 className="text-warning fw-bolder">Our Best Selling Product--</h1>
            <Row xs={1} md={2} lg={3} className="g-4">
                {
                    product.map(element =>
                        < Col key={element._id} >
                            <Card className="cards">
                                <img src={element.img} alt="" />
                                <Card.Body>
                                    <Card.Title className="text-bold">Name: {element.name}</Card.Title>
                                    <Card.Text>
                                      Price: ${element.price}
                                    </Card.Text>
                                    <Card.Text>
                                       {element.description}
                                    </Card.Text>
                                    <Card.Text>
                                       Rating: {element.rating}
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <NavLink to={`/placeOrder/${element._id}`}>
                                        <button>Buy Now</button>
                                    </NavLink>
                                </Card.Footer>
                            </Card>
                        </Col>
                    )
                }
            </Row>
            </div>
            <div className="container my-5" >
            <h1 className="text-success fw-bolder">Review of some Buyers--</h1>
            <Row xs={1} md={2} lg={3} className="g-4">
                {
                    review.map(element =>
                        < Col key={element._id} >
                        <Card style={{ width: '18rem' }}>
  <Card.Body className="bg-secondary rounded">
    <Card.Title className="text-warning">Name: {element.ProductName}</Card.Title>
    <Card.Subtitle className="mb-2 text-danger">Rating: {element.rating}</Card.Subtitle>
    <Card.Text className="text-info">
      Buyer's Review: {element.description}
    </Card.Text>
  </Card.Body>
</Card>
</Col>             )
                }
            </Row>
            </div>
        </div >
    );
};

export default Home;