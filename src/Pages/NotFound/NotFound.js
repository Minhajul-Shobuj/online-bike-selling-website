import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../image/2451354.jpg'

const NotFound = () => {
    return (
        <div>
            <h1>The page you are looking for is not Found;</h1>
            <div > <img className="img-fluid" style={{ width: '500px' }} src={image} alt="" /></div>
            <br />
            <Link to="/home"><button className="btn btn-danger">Back to home</button></Link>
        </div>
    );
};

export default NotFound;