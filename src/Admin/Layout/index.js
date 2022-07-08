import React, {useContext, useState} from 'react';
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {Outlet} from "react-router";
import './Layout.scss'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Tippy from "@tippyjs/react";
import Theme from "../../Atomic/Button";
import AvatarAdmin from "../../Atomic/Avatar";
import Mail from "../../Atomic/Messiage";

const Admin = ({setDarkss}) => {
    const [dark, setDark] = useState(setDarkss)
    return (
        <div >
            <Navbar
                className={dark ? 'app dark' : 'dark'}
                collapseOnSelect expand="lg" style={{height:70}}  variant="light">
                <Container>
                    <Navbar.Brand href="/admin/home">
                        <img src={'https://static.saltinourhair.com/build/images/saltinourhair-logo.png'} alt="" width={'114px'} height={'23px'}/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className='header_admin' id="responsive-navbar-nav">
                        <Nav className="me-autos">
                            {/*//todo*/}
                        </Nav>
                        <div className='header-admin'>
                            <div>

                            </div>
                            <div className='theme' style={{margin:"auto", }}>
                                <Tippy
                                    content={<span>Theme</span>}>
                                    <Theme />

                                    {/*<button onClick={() => setDark(true)}>theme</button>*/}
                                </Tippy>
                            </div>
                            <div className='admin-icon'>
                                <Tippy
                                    content={<span>Upload</span>}>
                                    <span><CloudUploadIcon/></span>
                                </Tippy>
                                <Mail/>
                                <Tippy content={<span>Pinterest</span>}>
                                    <AvatarAdmin/>
                                </Tippy>
                            </div>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet/>
        </div>
    );
};

export default Admin;