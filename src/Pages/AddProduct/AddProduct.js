import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
            axios.post('https://nameless-wave-90962.herokuapp.com/bikes', data)
                .then(function (res) {
                    if (res.data.insertedId) {
                        alert('Product Placed Successfully');
                        reset();
                    }
                })
    };
    return (
        <div>
            <h3>Place your Product--</h3>
            <form className="orderForm" onSubmit={handleSubmit(onSubmit)}>
                Name: <input className="ms-3 mt-3" {...register("name", { required: true, maxLength: 20 })} />
                <br />
                Rating: <input className="ms-3 mt-3" type="number" {...register("rating", { min: 1, max: 99, required: true })} />  <br />
                Price: <input className="ms-3 mt-3" type="number" {...register("price", { required: true })} />
                <br />
               Description :<input
                    style={{
                        width: '250px', height: '80px'
                    }} className="ms-3 mt-3" type="text" {...register("description", { required: true })} />
                <br />
                Img-Link: <input className="ms-3 mt-3" type="text" {...register("img", { required: true })} /> <br/>
                    <input className="ms-3 mt-3" type="submit" /> :
            </form>
        </div>
    );
};

export default  AddProduct;