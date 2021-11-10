import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { register, handleSubmit, reset } = useForm();
    const { loginUser, error, isLoading } = useAuth();
    const history = useHistory();
    const location = useLocation();

    const onSubmit = data => {
        loginUser(data.email, data.password, location, history);
        reset();
    };
    return (
        <div>
            {isLoading ?
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner> :
                <form className="orderForm" onSubmit={handleSubmit(onSubmit)}>
                    Your-Email: <input className="ms-3 mt-3"  {...register("email")} />
                    <br />
                    Password: <input className="ms-3 mt-3" type="password" {...register("password", { min: 6, max: 8, required: true })} />
                    <br />
                    <br />
                    <input className="ms-3 mt-3" type="submit" placeholder="Place Order" />
                </form>}
            {!isLoading &&
                <div>
                    <small className="text-danger">{error}</small>
                    <br />
                    <NavLink to="/register">New user?Register first!!</NavLink>
                </div>}
        </div>
    );
};

export default Login;