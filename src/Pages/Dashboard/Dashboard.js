import React, { useEffect, useState } from 'react';
import useAllOrders from '../../hooks/useAllorders';
import useAuth from '../../hooks/useAuth';

const Dashboard = () => {
    const [orders] = useAllOrders();
    const { user } = useAuth();
    const [myOrders, setmyOrders] = useState([]);
    useEffect(() => {
        const myOrders = orders.filter(order =>
            order.email === user.email);
        setmyOrders(myOrders);
    }, [orders, user]);
    return (
        <div>
            <h1 className="text-center">Your Orders</h1>
            <div className="card d-flex align-items-center justify-content-center mt-5">
                <ul className="list-group list-group-numbered">
                    {
                        myOrders.map(order => <li key={order._id} className="list-group-item">{order?.ProductName} <button className="btn btn-warning">pending</button></li>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;