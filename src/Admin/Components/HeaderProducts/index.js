import React, {useEffect, useState} from 'react';
import './HeaderProduct.scss'
import {Nav, Navbar, Container, NavDropdown} from "react-bootstrap";
import {demo} from "../../../Header/Destinations";

const HeaderProducts = ({data}) => {
    const[category, setCategory] = useState(null)
    useEffect(() => {
        setCategory(demo)
    },[demo])
    var list_country = []
    if(category !== null) {
        list_country = category.map((item) => (
            <>
                <Nav style={{display:"flex"}}>
                    <NavDropdown
                        id="nav-dropdown-dark-example"
                        title={item.tags}
                        menuVariant="dark"
                    >
                        <NavDropdown.Item href="#action/3.1">{item.sub_tag}</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </>
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
                {list_country}
            </div>
        </div>
    );
};

export default HeaderProducts;