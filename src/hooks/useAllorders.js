import { useEffect, useState } from "react"

const useAllOrders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://nameless-wave-90962.herokuapp.com/orders').then(res => res.json()).then(data => setOrders(data));
    }, []);
    return [orders,setOrders]
};
export default useAllOrders;