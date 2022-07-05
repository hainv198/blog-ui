import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.scss'
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import PublicIcon from '@mui/icons-material/Public';
import 'tippy.js/dist/tippy.css';
import Search from "./Search";
import {Outlet} from "react-router";
import {Link} from 'react-router-dom'
import {NavLink} from "react-router-dom"; // optional
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HeadlessTippy  from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import Language from "./Language";
import Destinations from "./Destinations";
import Account from "../Components/Authentication/Account";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {useState} from "react";
function Header() {
    const [currentUser, setCurrentUser] = useState(true)
    return (
        <div>
            <Navbar collapseOnSelect expand="lg"   variant="light" className='header_layout'>
                <Container>
                    <Navbar.Brand href="/">
                        <img src={'https://static.saltinourhair.com/build/images/saltinourhair-logo.png'} alt="" width={'114px'} height={'23px'}/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                            <div style={{alignItems:"center", display:"flex", gap:5, width:400, padding:'0 50px'}}>
                                    <Nav.Link as={NavLink} to="/" exact>Home</Nav.Link>
                                    <Destinations/>
                                    <Nav.Link as={NavLink} to="/travel">
                                        Travel
                                    </Nav.Link>
                                    <Nav.Link as={NavLink} to="/contact" exact>
                                        Contact
                                    </Nav.Link>
                            </div>
                            <Search/>
                        </Nav>
                        <div className='header-left'>
                            <HeadlessTippy
                                interactive
                                render={attrs => (
                                    <div className="box" tabIndex="-1" {...attrs}>
                                        <Language>
                                            <div className='search-language'>
                                                <span><PublicIcon/> English </span>
                                            </div>
                                            <div className='search-language'>
                                                <span><AutoStoriesIcon/> Nederlands</span><br/>
                                            </div>
                                        </Language>
                                    </div>
                                )}
                            >
                                <div className={'button_language'}>
                                    <span to='language'>EN <ExpandMoreIcon/></span>
                                </div>
                            </HeadlessTippy>

                            <div className='btn-sign'>
                                {currentUser ? (
                                    <Tippy content={<span>Sign in</span>}>
                                        <button>
                                            <Nav.Link as={NavLink} to='/singin'>Sign in<AccountCircleIcon/></Nav.Link>
                                        </button>
                                    </Tippy>
                                ) : (
                                    <Account status={currentUser}/>
                                )}
                            </div>

                            <div className='icon-btn'>
                                <Tippy
                                    content={<span>Instagram</span>}>
                                    <span><i className='bx bxl-instagram-alt'></i></span>
                                </Tippy>
                                <Tippy content={<span>Youtube</span>}>
                                    <span><i className='bx bxl-youtube'></i></span>
                                </Tippy>
                                <Tippy content={<span>Pinterest</span>}>
                                    <span><i className='bx bxl-pinterest-alt'></i></span>
                                </Tippy>
                            </div>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet/>
        </div>


    );
}

export default Header;