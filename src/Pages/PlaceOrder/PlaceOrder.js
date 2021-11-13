import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import useProducts from '../../hooks/useProducts';
import useAuth from '../../hooks/useAuth';
import Review from '../Review/Review';

const PlaceOrder = () => {
    const {user}=useAuth();
    const { register, handleSubmit, reset } = useForm();
    const { id } = useParams();
    const [products] = useProducts();
    const [product, setProduct] = useState({});
    useEffect(() => {
        const singleproduct = products.find(product => product._id === id);
        setProduct(singleproduct);
    }, [products, id]);
    const onSubmit = data => {
        axios.post('https://nameless-wave-90962.herokuapp.com/orders', data)
            .then(function (res) {
                if (res.data.insertedId) {
                    alert('Order Placed Successfully');
                    reset();
                }
            })
    };

    return (
        <div>
        <div className="d-flex row mt-5">
            <div className="col-md-12 col-lg-6" >
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={product?.img} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title text-bolder">Name: {product?.name}</h5>
                                <small className="card-title text-bold">Price: ${product?.price}</small><br/>
                                <small className="card-title">Rating: {product?.rating}</small>
                                <p className="card-text">Description: {product?.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-12 col-lg-6 mt-5" >
                <h3>Place your order--</h3>
                <form className="orderForm" onSubmit={handleSubmit(onSubmit)}>
                    Product: <input className="ms-3 mt-3" {...register("ProductName", { required: true })} placeholder="please,enter product name" />
                    <br />
                    Your-Name: <input className="ms-3 mt-3" {...register("name", { required: true, maxLength: 20 })} defaultValue={user.displayName} />
                    <br />
                    Your-Email: <input className="ms-3 mt-3" {...register("email")} defaultValue={user.email} />
                    <br />
                    Your-City:<input className="ms-3 mt-3" {...register("city", { required: true })} placeholder="please,enter your country" />
                    <br />
                    Quantity: <input className="ms-3 mt-3" type="number" {...register("quantity", { min: 1, max: 99, required: true })} />
                    <br />
                    <input className="ms-3 mt-3" type="submit" placeholder="Place Order" />
                </form>
            </div>
        </div>

        <Review></Review>
        </div>
    );
};

export default PlaceOrder;