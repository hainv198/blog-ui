import React, {useRef} from 'react';
import './styles_categories.css'
import {Link} from "react-router-dom";
import {Col, Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";

const Europe = () => {
    let inputRef = useRef();
    return (
        <>
            <header className={'header'}>
                <Container className="my-container">
                    <Row className={'mt-5 container-fluid align-items-center'}>
                        <Col className={'mt-5'}>
                            <h1>
                                <div className={'category-cover-left'}>
                                    <h1 className={'category-cover-left__heading'}>
                                        <span className={'category-cover-subtitle'}>Travel in</span>
                                        <div className={'category-cover-title'} style={{fontSize: "12rem"}} title={'Europe'}>
                                            Europe
                                        </div>
                                    </h1>
                                    <p className={'category-cover-excerpt'}>
                                        Majestic Asia! An incredible continent that has something to offer for any kind of
                                        traveler.
                                    </p>
                                </div>
                            </h1>
                        </Col>
                        <Col className={'page-cover-image me-5'}>
                            <img className={'page-cover_image'}
                                 srcSet={'https://static.saltinourhair.com/wp-content/uploads/2020/05/23120157/saltinourhair-asia-768x768.jpg 768w, https://static.saltinourhair.com/wp-content/uploads/2020/05/23120157/saltinourhair-asia-1024x1024.jpg 1024w, https://static.saltinourhair.com/wp-content/uploads/2020/05/23120157/saltinourhair-asia-1080x1080.jpg 1350w, https://static.saltinourhair.com/wp-content/uploads/2020/05/23120157/saltinourhair-asia-1440x1440.jpg 1800w, https://static.saltinourhair.com/wp-content/uploads/2020/05/23120157/saltinourhair-asia.jpg'}
                                 alt={'10 Best Beaches in Sri Lanka'}/>
                        </Col>
                        <Col className>
                            <div className={'category-cover-right align-items-end container'}>
                                <div className={'category-cover-right-top mt-3'}>
                                    <div className={'category-cover-right-icon text-center'}>
                                    <span>
                                          <img className={'salt-icon w-25'} src={require("../images/icons/lightbulb.png")}/>
                                    </span>
                                    </div>
                                    <div className="right-content-text">
                                        <h5><strong>Best time to travel</strong></h5>
                                        <span>March to October is the best time to visit Vietnam</span>
                                    </div>
                                </div>
                                <div className={'category-cover-right-top mt-3'}>
                                    <div className={'category-cover-right-icon text-center'}>
                                    <span>
                                         <img className={'salt-icon w-25'} src={require("../images/icons/ticket.png")}/>
                                    </span>
                                    </div>
                                    <div className="right-content-text">
                                        <h5><strong>Currency</strong></h5>
                                        <span>March to October is the best time to visit Vietnam</span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </header>
            <div className="page-content-container">
                <div className="page-content  mt-5 d-flex container justify-content-between" >
                    <div className="page-content__search">
                        <h3 className="search-title__heading text-center">Pick a destination</h3>
                        <ul className="page-content__search-ul">
                            <li className="page-content__search-li mt-3 mb-1">
                                <img className="page-content__search-icon" src={require("../images/columbia/search4.jpg")} alt="icon images"/>
                                <a href="src/components/Asia#"><span className="page-content__search-link">HANOI</span></a>
                            </li>
                            <li className="page-content__search-li mt-3  mb-1">
                                <img className="page-content__search-icon" src={require("../images/columbia/cover.jpg")} alt="icon images"/>
                                <a href="src/components/Asia#"><span className="page-content__search-link">DA NANG</span></a>
                            </li>
                            <li className="page-content__search-li mt-3  mb-1">
                                <img className="page-content__search-icon" src={require("../images/columbia/article.jpg")} alt="icon images"/>
                                <a href="src/components/Asia#"><span className="page-content__search-link">HO CHI MINH</span></a>
                            </li>
                            <li className="page-content__search-li mt-3  mb-1">
                                <img className="page-content__search-icon" src={require("../images/columbia/mustdo1.jpg")} alt="icon images"/>
                                <a href="src/components/Asia#"><span className="page-content__search-link">SAPA</span></a>
                            </li>
                            <li className="page-content__search-li mt-3  mb-1">
                                <img className="page-content__search-icon" src={require("../images/columbia/mustdo2.jpg")} alt="icon images"/>
                                <a href="src/components/Asia#"><span className="page-content__search-link">DA LAT</span></a>
                            </li>
                            <li className="page-content__search-li">
                                <div className="input-group rounded">
                                    <input ref={inputRef} type="search" className="form-control rounded" defaultValue="Or type here to search..."
                                           aria-label="Search" aria-describedby="search-addon" onFocus={(e) => inputRef.current.value=""} onBlur={(e) => inputRef.current.value="Or type here to search..."}/>
                                    <span className="input-group-text border-0" id="search-addon">
                                    <i className="fas fa-search"></i></span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="page-content-article container">
                        <div className="article-img">
                            {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                            <img className="article-img__img" src={require("../images/article.jpg")} alt="article picture"/>
                        </div>
                        <div className="div">
                            <div className="article-img__span">

                            </div>
                            <div className="article-heading">
                                <h1 className="text-center container w-75">Vietnam travel guide: A complete 3-week itinerary</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*page content intro article*/}
            <Container>
                <div className="must-do section container">
                    <h2 className="mb-3">MUST DO IN VIETNAM</h2>
                    <div className="d-flex row justify-content-between">
                        <div className="must-do__img-container">
                            <img className="must-do__img" src={require("../images/images1.jpg")} alt="title"/>
                            <div className="must-do__title">
                                <div>
                                    <h4>11 things to do in Hoian, <br/>Vietnam</h4>
                                    <span className="must-do__tag">Vietnam</span>
                                </div>
                            </div>
                        </div>
                        <div className="must-do__img-container">
                            <img className="must-do__img text-white" src={require("../images/image2.jpg")} />
                            <div className="must-do__title">
                                <h4>Best thing in Ninh Binh, <br/>Tam Coc</h4>
                                <span className="must-do__tag">Vietnam</span>
                            </div>
                        </div>
                        <div className="must-do__img-container">
                            <img className="must-do__img" src={require("../images/images3.jpg")} />
                            <div className="must-do__title">
                                <h4>Trekking in Sapa, balance <br/>on the border of...</h4>
                                <span className="must-do__tag">Vietnam</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container>
                <div className="section ending-content container">
                    <div className="ending-content__p">
                        <h3  style={{fontSize:"3rem", lineHeight:"2.5rem"}}>
                            Vietnam
                        </h3 >
                        <p  style={{fontSize:"large", lineHeight:"2.5rem"}}>
                            Vietnam is a country of contrasts, where loud, vibrant cities sit within touching distance of calm oceans and rising limestone karsts.<br/>
                            Experience city life, where thousands of motorbikes make crossing the road feel like a game of life and death. Yet, this is strangely loveable and provides a true sense of local life. Add the sense of community, with craft-making families on the streets and friends bent over a steaming bowl of pho. This will make you fall in love with these urban jungles.
                        </p>
                    </div>

                    <div className="ending-content__p">
                        <h3  style={{fontSize:"3rem", lineHeight:"2.5rem"}}>
                            The countryside
                        </h3>
                        <p  style={{fontSize:"large", lineHeight:"2.5rem"}}>
                            Leave the city behind and take on one of the motorbike loops, that worm through rice fields and coffee plantations. This is what put Vietnam on the foodie map. Eat your way through a country exploding with flavor, and join one of the many excellent cooking classes.<br/>
                            The more somber side to Vietnam is its hostile history, which is still there to see. Tributes, museums, and even architecture provide an insight into the country’s war-torn past. But it is this mix of history, culture, coasts, and landscapes, that makes Vietnam so special and rightly leaves a lasting impression that will never be forgotten.
                        </p>
                    </div>

                </div>
            </Container>

        </>
    );
};

export default Europe;