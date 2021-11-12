import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const check = window.confirm('Are you a Admin?');
        if (check) {
            axios.post('http://localhost:5000/bikes', data)
                .then(function (res) {
                    console.log(res);
                    if (res.data.insertedId) {
                        alert('Package Placed Successfully');
                        reset();
                    }
                })
        }
    };
    return (
        <div>
            <h3>Place your Product--</h3>
            <form className="orderForm" onSubmit={handleSubmit(onSubmit)}>
                Name: <input className="ms-3 mt-3" {...register("name", { required: true, maxLength: 20 })} />
                <br />
                Img-Link: <input className="ms-3 mt-3" type="text" {...register("img", { required: true })} />
                <br />
               Description :<input
                    style={{
                        width: '250px', height: '80px'
                    }} className="ms-3 mt-3" type="text" {...register("description", { required: true })} />
                <br />
                    <input className="ms-3 mt-3" type="submit" placeholder="Place Order" /> :
            </form>
        </div>
    );
};

export default  AddProduct;