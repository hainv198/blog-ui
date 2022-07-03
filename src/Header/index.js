import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.scss'
import 'tippy.js/dist/tippy.css';

import Search from "./Search"; // optional
function Header() {



    return (
        <Navbar collapseOnSelect expand="lg"   variant="dark" className='header_layout'>
            <Container>
                <Navbar.Brand href="#home">Logo</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">

                       <div style={{alignItems:"center", display:"flex", gap:5, width:400}}>
                           <Nav.Link href="/">Home</Nav.Link>
                           <Nav.Link href="about">About FaiX</Nav.Link>
                           <Nav.Link href="contact">Contact</Nav.Link>
                           <Nav.Link href="join">Join us</Nav.Link>
                       </div>
                    <Search/>
                    </Nav>

                    <div>

                        <div>
                            <button>sign in</button>
                            <button>sign up</button>
                        </div>
                    </div>

                </Navbar.Collapse>
            </Container>

        </Navbar>
    );
}

export default Header;