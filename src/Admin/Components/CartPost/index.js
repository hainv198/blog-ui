import React, {useEffect, useState} from 'react';

const CartPost = ({data}) => {
    const [cart, setCart] = useState([])
    useEffect(() => {
        setCart(data)
    },[data])
    return (
        <div>


        </div>
    );
};

export default CartPost;