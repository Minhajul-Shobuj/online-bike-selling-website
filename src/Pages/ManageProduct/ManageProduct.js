import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import useProducts from "../../hooks/useProducts";


const ManageProduct=()=>{
    const [products,setProducts] = useProducts();

    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://nameless-wave-90962.herokuapp.com/bikes/${id}`
            fetch(url, {
                method: 'DELETE'
            }).then(res => res.json()).then(data => {
                if (data.deletedCount) {
                    alert('successfully removed');
                    const remaining = products.filter(order => order._id !== id);
                    setProducts(remaining);
                }
            });
        }
    };
    return(
        <div>
             <div className="container mt-3">
            <Row xs={1} md={2} lg={3} className="g-4">
                {
                    products.map(element =>
                        < Col key={element._id} >
                            <Card className="cards">
                                <img src={element.img} alt="" />
                                <Card.Body>
                                    <Card.Title className="text-bold">Name: {element.name}</Card.Title>
                                    <Card.Text>
                                      Price: {element.price}
                                    </Card.Text>
                                    <Card.Text>
                                       {element.description}
                                    </Card.Text>
                                    <Card.Text>
                                       Rating: {element.rating}
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                <button onClick={() => handleDelete(element._id)} className="btn btn-danger">Remove</button>
                                </Card.Footer>
                            </Card>
                        </Col>
                    )
                }
            </Row>
            </div>
             </div> 
             
             )
};

export default ManageProduct;