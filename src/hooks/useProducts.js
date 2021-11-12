import { useEffect, useState } from "react";


const useProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://nameless-wave-90962.herokuapp.com/bikes')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return [
        products
    ]
};

export default useProducts;