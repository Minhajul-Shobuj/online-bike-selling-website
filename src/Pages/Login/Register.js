import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const { registerUser, error, isLoading,loginWithGoogle,user } = useAuth();
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
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return
        };
        const email=loginData.email.toLowerCase()
        registerUser(email, loginData.password, loginData.name, history);
        e.preventDefault();
    };
    const handleGoogleSignIn = () => {
        loginWithGoogle( history,location)
    }
   
    return (
        <div>
            {isLoading ?
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner> :
                <form  onSubmit={handleRegister}> 
                    Your-Name: <input onBlur={handleOnBlur} className="ms-3 mt-3" type="text"  name="name" required/>
                    <br />
                    Your-Email: <input onBlur={handleOnBlur} className="ms-3 mt-3" type="email"  name="email" required/>
                    <br />
                    Password: <input  onBlur={handleOnBlur} className="ms-3 mt-3" type="password" name="password" required/>
                    <br />
                    Re-Type Pasword: <input onBlur={handleOnBlur} className="ms-3 mt-3" type="password" name="password2" required/>
                    <br />
                    <input className="ms-3 mt-3" type="submit" />
                </form>}
            {!isLoading &&
                <div>
                    <small className="text-danger">{error}</small>
                    <br />
                    <NavLink to="/login">Already Registered?Please,Login</NavLink>
                </div>}
               { !user?.email && !isLoading &&
               <button onClick={handleGoogleSignIn} className="btn btn-success mt-2 rounded">Register with Google</button>}
        </div>
    );
};

export default Register;