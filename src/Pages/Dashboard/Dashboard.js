import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAllOrders from '../../hooks/useAllorders';
import useAuth from '../../hooks/useAuth';

const Dashboard = () => {
    const [orders] = useAllOrders();
    const { user } = useAuth();
    console.log(user.email)
    const [admin, setAdmin] = useState(false);
    const [myOrders, setmyOrders] = useState([]);
    useEffect(() => {
        const myOrders = orders.filter(order =>
            order.email === user.email);
        setmyOrders(myOrders);
    }, [orders, user]);
    const url=`http://localhost:5000/users/${user.email}`
    console.log(url)
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user?.email])

    return (
        <div>
            <h1 className="text-center">Your Orders</h1>
            <div className="card d-flex align-items-center justify-content-center mt-5">
                <ul className="list-group list-group-numbered">
                    {
                        myOrders.map(order => <li key={order._id} className="list-group-item">{order?.ProductName} <button className="btn btn-warning">pending</button></li>)
                    }
                </ul>
                {admin &&
                    <NavLink to="/admin">
                    <button className="btn btn-success">Make Admin</button>
                </NavLink>}
            </div>
        </div>
    );
};

export default Dashboard;