import React from 'react';
import Sidebar from "../../Components/Sidebar";
import './Post.scss'
import {useEffect, useState} from "react";
import HeaderProducts from "../../Components/HeaderProducts";
import CartItem from "../../Components/CartItem";

const Post = () => {

    const [post, setPost] = useState([])

    useEffect(() => {
        fetch('https://62b11da8196a9e98702f9eca.mockapi.io/blog/')
            .then((res) => res.json())
            .then((res) => {
                setPost(res)
            })
    },[post])
    return (
        <div className="home ">
            <Sidebar />
            <div className="homeContainer">
                <div className="xxx">
                    <HeaderProducts data={post}/>
                </div>
                <div className='post_main'>
                    <div style={{alignItems:"center", textAlign:"center"}}>
                        <h1>TRENDING</h1>
                    </div>
                    <CartItem data={post}/>
                </div>
            </div>
        </div>
    );
};

export default Post;