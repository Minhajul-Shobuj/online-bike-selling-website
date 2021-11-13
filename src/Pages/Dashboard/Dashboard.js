import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAllOrders from '../../hooks/useAllorders';
import useAuth from '../../hooks/useAuth';

const Dashboard = () => {
    const [orders] = useAllOrders();
    const { user } = useAuth();
    const [admin, setAdmin] = useState(false);
    const [myOrders, setmyOrders] = useState([]);
    useEffect(() => {
        const myOrders = orders.filter(order =>
            order.email === user.email);
        setmyOrders(myOrders);
    }, [orders, user]);
    const url=`https://nameless-wave-90962.herokuapp.com/users/${user.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user?.email,url]);
    return (
        <div className="Row col-lg-6 col-md-6 col-md-12 d-flex">
            {admin &&
                   <div className="col card d-flex align-items-center justify-content-center mt-5">
                       <ul className="list-group list-group-numbered">
                        <NavLink to="/admin">
                    <button className="btn btn-secondary my-2">Make Admin</button>
                </NavLink>
                    <NavLink to="/addProduct">
                    <button className="btn btn-secondary mb-2">Add Product</button>
                </NavLink>
                    <NavLink to="/manageProduct">
                    <button className="btn btn-secondary mb-2">Manage Product</button>
                </NavLink>
                </ul>
                       </div>}
            <div className="col mt-5">
            <h1 className="text-center">Your Orders</h1>
            <NavLink to="/manageOrder">
            <button className="btn btn-success">Manage Orders</button>
                </NavLink>
            <div className="d-flex align-items-center justify-content-center mt-5">
                <ul className="list-group list-group-numbered">
                    {
                        myOrders.map(order => <li key={order._id} className="list-group-item">{order?.ProductName} <button className="btn btn-warning">pending</button>
                        </li>)
                    }
                </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;