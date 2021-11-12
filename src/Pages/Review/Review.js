import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';


const Review =()=>{
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data)
        axios.post('https://nameless-wave-90962.herokuapp.com/reviews', data)
            .then(function (res) {
                if (res.data.insertedId) {
                    alert('Reviews Placed Successfully');
                    reset();
                }
            })
    };

    return(
       < div>
            <h3>Post A Review--</h3>
            <form className="orderForm" onSubmit={handleSubmit(onSubmit)}>
                    Product: <input className="ms-3 mt-3" {...register("ProductName", { required: true })} placeholder="please,enter product name" />
                    <br />
                    Description: <input className="ms-3 mt-3"  style={{
                        width: '250px', height: '80px'
                    }}  {...register("description", { required: true })} />
                    <br />
                    Rating: <input className="ms-3 mt-3" type="number" {...register("rating", { min: 1, max: 5, required: true })} />
                    <br />
                    <input className="ms-3 mt-3" type="submit" />
                </form>
       </div>
    )
};

export default Review;