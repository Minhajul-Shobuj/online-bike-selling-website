import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { loginUser, error, isLoading,loginWithGoogle } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const [loginData, setLoginData] = useState({});

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    };

    const handleRegister = e => {
        loginUser( loginData.email,loginData.password, location, history);
        e.preventDefault();
    };
    const handleGoogleLogin = () => {
        loginWithGoogle( history,location)
    }
    return (
        <div>
            {isLoading ?
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner> :
                <form className="orderForm" onSubmit={handleRegister}>
                    Your-Email: <input onBlur={handleOnBlur} className="ms-3 mt-3" type="email"  name="email" required/>
                    <br />
                    Password: <input  onBlur={handleOnBlur} className="ms-3 mt-3" type="password" name="password" required/>
                    <br />
                    <input className="ms-3 mt-3" type="submit" />
                </form>}
            {!isLoading &&
                <div>
                    <small className="text-danger">{error}</small>
                    <br />
                    <NavLink to="/register">New user?Register first!!</NavLink>
                </div>}
                {!isLoading &&
                    <button onClick={handleGoogleLogin} className="btn btn-success mt-2 rounded">Register with Google</button>}
        </div>
    );
};

export default Login;