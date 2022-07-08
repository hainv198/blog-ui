import React from 'react';
import {Link} from 'react-router-dom'
import './CartItem.scss'
import {useEffect, useState} from "react";


const CartItem = ({data}) => {
    const [cart, setCart] = useState(null)

    useEffect(() => {
        setCart(data)
    },[data])

    var itemCart = []
    if(cart !== null) {
        itemCart = cart.map((item) => (
            <div
                data-aos="fade-up"
                 data-aos-duration="2000"
                className='col cart_left'>
                <div className="cart_left_header">
                    <div className='sub_image'>
                        <img src={item.sub_image.a1} alt=""/>
                    </div>
                    <div className='sub_title'>
                                    <span className='title'>
                                        {cart.sub_title}
                                    </span><br/>
                        <p className='detail'>
                            By<span> LeeAnne Rimel</span> | June 13, 2022
                        </p>
                    </div>
                    <div className='sub_content'>
                        <p>{(item.sub_content.a1).slice(0, 150)}[…]</p>
                    </div>
                    <p>
                        <Link to={'/admin/products/readmore/' + item.id}>
                            <button
                                type="button"
                            >
                                Read More
                            </button>
                        </Link>
                    </p>
                </div>
            </div>
        ))
    }
        return(
            <div

                style={{margin:'0 auto',justifyContent:'center'}}
                className='row row-cols-1 row-cols-md-3 g-4 container'>
                {itemCart}
            </div>
        );
};

export default CartItem;

