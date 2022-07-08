import React, {useEffect, useState} from 'react';
import { styled } from '@mui/material/styles';

import {Col, Row} from "react-bootstrap";
import IconButton from "@mui/material/IconButton";
import CartItem from "../CartItem";



export default function CartPost({data}) {

    const [cart, setCart] = useState([])
    useEffect(() => {
        setCart(data)
    },[data])


    return (
        <div>
            <Row>
                <Col>
                    <CartItem data={cart}/>
                </Col>
                <Col>
                    <CartItem/>
                </Col>
                <Col>
                    <CartItem/>
                </Col>
            </Row>

        </div>

    );
}







//
// const CartPost = ({data}) => {
//     const [cart, setCart] = useState([])
//     useEffect(() => {
//         setCart(data)
//     },[data])
//     return (
//         <div>
//             <h1>Cart</h1>
//         </div>
//     );
// };
//
// export default CartPost;