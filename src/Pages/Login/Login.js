import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import './Login.css'
import { Link } from 'react-router-dom';
import img from '../../image/login-img.svg'

const Login = () => {
    const { loginUser, isLoading, loginWithGoogle } = useAuth();
    const { register, handleSubmit, } = useForm();
    const history = useHistory();
    const location = useLocation();

    const onSubmit = data => {
        loginUser(data.email, data.password, location, history)
    };
    const handleGoogleLogin = () => {
        loginWithGoogle(history, location)
    }
    return (
        <div>
            {isLoading ?
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner> :
                <div className="login">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6" data-aos="fade-up">
                                <div className="login_img">
                                    <img src={img} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6" data-aos="fade-up">
                                <div className="form_container">
                                    <h2 className="text-center mb-4">Login</h2>
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <input type="email" {...register("email")} placeholder="Email" />
                                        <input type="password" {...register("password")} placeholder="Password" />
                                        <input className="btn btn-primary w-25" type="submit" value="Login" />
                                    </form>
                                    <div><button onClick={handleGoogleLogin} className="btn btn-success mt-2 rounded">Register with Google</button></div>
                                    <p className="text-center">New User ? <Link to="/register">Please Register</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>}
        </div>
    );
};

export default Login;