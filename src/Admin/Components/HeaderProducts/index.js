import React, {useEffect, useState} from 'react';
import './HeaderProduct.scss'
import {Nav, Navbar, Container, NavDropdown} from "react-bootstrap";


const HeaderProducts = ({data}) => {


    const[category, setCategory] = useState(null)
    useEffect(() => {
        setCategory(data)
    },[data])
    var list_country = []
    if(category !== null) {

        list_country = category.map((item) => (
            <div>
                <NavDropdown.Item
                    className='header-country'
                    href="#action/3.1"
                    style={{fontSize:'1.6rem'}}
                >
                    {item.sub_tag} >
                    {item.title}
                </NavDropdown.Item>
            </div>
        ))
    }
    return (
        <div >
            <div className='header-post'>
                <div className="header_left"></div>
                <div className="header_right"></div>
            </div>
            <div className='header_title'>
                <h1>BLOG</h1>
                <div className="title">
                    <span>Get best practices, tips and tricks, insights and career advice for Salesforce Admins!</span>
                </div>
            </div>
            <div className="category">
                <Nav style={{display:"flex"}}>
                    <NavDropdown
                        id="nav-dropdown-light-example"
                        title='Newest '
                        menuVariant="light"
                    >
                        {list_country}
                    </NavDropdown>
                </Nav>
            </div>
        </div>
    );
};

export default HeaderProducts;