import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
<div className="container d-flex bg-secondary align-items-center justify-content-center text-warning rounded my-5">
                <div><p>We provide 100% genuine products.We import product from Australia,Canada,Uk,Japan,Chine,Korea...For <Link to="/about">more</Link> </p>
                    <h6>Email: bikepickerinfo@gmail.com</h6>
                    <h6>Mobile: 01700500000</h6>
                    <small className="text-danger">© All right reserved bikepicker.com</small></div>
            </div>
        </div>
    );
};

export default Footer;