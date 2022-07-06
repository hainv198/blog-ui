import React from "react";
import "../Footer/Footer.css";
import { Link } from "react-router-dom";
import { Button, Card, CardImg, Col, Container, Row } from "react-bootstrap";



function Footer() {
    return (
        <div class="footer" style={{"margin-top": "20px"}}>
            <div class="container">
                <footer class="py-5">
                    <div class="row footer-content">
                        <div class="row footer-menu col-lg-8 col-md-12 col-sm-12 col-xs-12">
                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <h3>Menu</h3>
                                <ul class="nav flex-column">
                                    <li class="nav-item mb-2"><Link to={"/"} class="nav-link p-0 text-muted">Home</Link></li>
                                    <li class="nav-item mb-2"><Link to={"/#"} class="nav-link p-0 text-muted">Destination</Link></li>
                                    <li class="nav-item mb-2"><Link to={"/#"} class="nav-link p-0 text-muted">Travel</Link></li>
                                    <li class="nav-item mb-2"><Link to={"/about"} class="nav-link p-0 text-muted">About</Link></li>
                                </ul>
                            </div>

                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <h3>Our policy</h3>
                                <ul class="nav flex-column">
                                    <li class="nav-item mb-2"><Link to={"/#"} class="nav-link p-0 text-muted">Privacy policy</Link></li>
                                    <li class="nav-item mb-2"><Link to={"/#"} class="nav-link p-0 text-muted">Term of service</Link></li>
                                    <li class="nav-item mb-2"><Link to={"/#"} class="nav-link p-0 text-muted">Copyright report</Link></li>
                                </ul>
                            </div>

                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <h3>Our fanpage</h3>
                                <ul class="nav flex-column">
                                    <li class="nav-item mb-2"><Link to={"/#"} class="nav-link p-0 text-muted">Facebook</Link></li>
                                    <li class="nav-item mb-2"><Link to={"/#"} class="nav-link p-0 text-muted">Instagram</Link></li>
                                    <li class="nav-item mb-2"><Link to={"/#"} class="nav-link p-0 text-muted">Pinterest</Link></li>
                                    <li class="nav-item mb-2"><Link to={"/#"} class="nav-link p-0 text-muted">FAQs</Link></li>
                                </ul>
                            </div>
                        </div>

                        {/* subcribe email */}
                        <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12 row" id="myForm">
                            <form class="subcribe-form">
                                <div class="col-12">
                                    <h3>Subscribe to our newsletter</h3>
                                    <p>Monthly digest of whats new and exciting from us.</p>
                                </div>

                                <div class="d-flex w-100 gap-2 col-12">
                                    <input id="newsletter1" type="text" class="form-control" placeholder="Email address" />
                                    <button class="btn btn-primary" type="button">Subscribe</button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div class="d-flex justify-content-between border-top">
                        <p>&copy; 2022 Company, Inc. All rights reserved.</p>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default Footer;
