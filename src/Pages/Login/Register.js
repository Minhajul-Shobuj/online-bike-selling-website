import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const { register, handleSubmit, reset } = useForm();
    const { registerUser, error, isLoading } = useAuth();
    const history = useHistory();

    const onSubmit = data => {
        const email=data.email.toLowerCase()
        if (data.password !== data.password2) {
            alert("password didn't match");
            return;
        }
        else {
            registerUser(email, data.password, data.name, history);
            reset();
        }
    };
    return (
        <div>
            {isLoading ?
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner> :
                <form className="orderForm" onSubmit={handleSubmit(onSubmit)}>
                    Your-Name: <input className="ms-3 mt-3"  {...register("name", { required: true, maxLength: 20 })} />
                    <br />
                    Your-Email: <input className="ms-3 mt-3"  {...register("email")} />
                    <br />
                    Password: <input className="ms-3 mt-3" type="password" {...register("password", { min: 6, max: 8, required: true })} />
                    <br />
                    Re-Type Pasword: <input className="ms-3 mt-3" type="password" {...register("password2", { min: 6, max: 8, required: true })} />
                    <br />
                    <input className="ms-3 mt-3" type="submit" />
                </form>}
            {!isLoading &&
                <div>
                    <small className="text-danger">{error}</small>
                    <br />
                    <NavLink to="/login">Already Registered?Please,Login</NavLink>
                </div>}
        </div>
    );
};

export default Register;