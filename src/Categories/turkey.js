import React, {useRef} from 'react';
import './styles.css';
import {Link} from "react-router-dom";
import {Col, Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";

const Turkey = () => {
    let inputRef = useRef();
    return (
        <>
            <header className={'header'}>
                <Container className="my-container">
                    <Row className={'mt-5 container-fluid align-items-center'}>
                        <Col className={'mt-5'}  style={{marginLeft: "5rem"}}>
                            <h1>
                                <div className={'category-cover-left'}>
                                    <h1 className={'category-cover-left__heading'}>
                                        <span className={'category-cover-subtitle'}>Travel in</span>
                                        <div className={'category-cover-title'} style={{fontSize: "14rem"}} title={'Turkey'}>
                                            Turkey
                                        </div>
                                    </h1>
                                    <p style={{fontSize:"1.6rem", fontWeight:"light"}} className={'category-cover-excerpt'}>
                                        From the postcard-perfect beaches and mountain ranges, to its charming cobblestone streets that are perfect for sipping tea and having baklava.
                                    </p>
                                </div>
                            </h1>
                        </Col>
                        <Col className={'page-cover-image me-5'}  style={{marginLeft: "5rem"}} >
                            <img className={'page-cover_image'} src={require('../images/turkey/saltinourhair-turkey.jpg')}
                                 alt={'10 Best Beaches in Sri Lanka'}/>
                        </Col>
                        <Col className>
                            <div className={'category-cover-right container'} style={{left:"10rem", width:"30rem"}}>
                                <div className={'category-cover-right-top mt-3'}>
                                    <div className={'category-cover-right-icon text-center'}>
                                    <span>
                                          <img className={'salt-icon w-25'} src={require("../images/icons/lightbulb.png")}/>
                                    </span>
                                    </div>
                                    <div className="right-content-text">
                                        <h5><strong>Best time to travel</strong></h5>
                                        <span>March to October is the best time to visit Turkey</span>
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
                                        <span>Turkey’s currency is called Lira. 1 USD is equivalent to 6.4 Turkish Lira.</span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </header>
            <Container className="container-container">
                <div className="container page-content-container ">
                    <div className="page-content mt-5 d-flex justify-content-between  container" >
                        <div className="page-content__search">
                            <h3 className="search-title__heading">Pick a destination</h3>
                            <ul className="page-content__search-ul">
                                <li className="page-content__search-li mt-3 mb-1">
                                    <img className="page-content__search-icon" src={require("../images/turkey/turkey.jpg")} alt="icon images"/>
                                    <Link to={'/page/7'}><span className="page-content__search-link">ISTANBUL</span></Link>
                                </li>
                                <li className="page-content__search-li mt-3  mb-1">
                                    <img className="page-content__search-icon" src={require("../images/turkey/turkey3.jpg")} alt="icon images"/>
                                    <a href="src/components/Asia#"><span className="page-content__search-link">CAPPADOCIA</span></a>
                                </li>
                                <li className="page-content__search-li mt-3  mb-1">
                                    <img className="page-content__search-icon" src={require("../images/turkey/mustdo3.jpg")} alt="icon images"/>
                                    <a href="src/components/Asia#"><span className="page-content__search-link">FETHIYE</span></a>
                                </li>
                                <li className="page-content__search-li mt-3  mb-1">
                                    <img className="page-content__search-icon" src={require("../images/turkey/turkey1.jpg")} alt="icon images"/>
                                    <a href="src/components/Asia#"><span className="page-content__search-link">ANKARA</span></a>
                                </li>
                                <li className="page-content__search-li mt-3  mb-1">
                                    <img className="page-content__search-icon" src={require("../images/turkey/mustdo2.jpg")} alt="icon images"/>
                                    <a href="src/components/Asia#"><span className="page-content__search-link">ANTALYA</span></a>
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
                        <div className="page-content-article" >
                            <div className="article-img img-img">
                                {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                                <img className="article-img__img" src={require("../images/article.jpg")} alt="article picture"/>
                            </div>
                            <div className="div">
                             <span>
                                 <img style={{width: "8rem"}} className={'salt-icon'} src={require("../images/icons/lightbulb.png")}/>
                             </span>
                                <div className="article-heading">
                                    <h1 className="text-center container w-75" style={{fontSize:"3rem"}}>Turkey travel guide: A complete 3-week itinerary</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Container>
            {/*page content intro article*/}
            <Container>
                <div className="must-do section container" style={{marginTop:"10rem"}}>
                    <h1 style={{fontWeight:"bolder", fontSize:"3rem"}} className="mb-3">MUST DO IN TURKEY</h1>
                    <div className="d-flex justify-content-between">
                        <div className="must-do__img-container">
                            <img className="must-do__img" src={require("../images/turkey/mustdo1.jpg")} alt="title"/>
                            <div className="must-do__title">
                                <div>
                                    <span>11 things to do in Istanbul Turkey</span><br/>
                                    <span className="must-do__tag">Turkey</span>
                                </div>
                            </div>
                        </div>
                        <div className="must-do__img-container">
                            <img className="must-do__img text-white" src={require("../images/turkey/mustdo3.jpg")} />
                            <div className="must-do__title">
                                <span>7 best things to do in Kas, Turkey</span><br/>
                                <span className="must-do__tag">Turkey</span>
                            </div>
                        </div>
                        <div className="must-do__img-container">
                            <img className="must-do__img" src={require("../images/turkey/mustdo2.jpg")} />
                            <div className="must-do__title">
                                <span>Best things to do in Fethiye, Turkey</span><br/>
                                <span className="must-do__tag">Turkey</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container>
                <div className="section ending-content container">
                    <div className="ending-content__p">
                        <h3  style={{fontSize:"3rem", lineHeight:"2.5rem"}}>
                            Turkey
                        </h3 >
                        <p  style={{fontSize:"large", lineHeight:"3.5rem"}}>
                            Transcontinental Turkey: a remarkable country where continents and cultures blend together, resulting in unique Asian, European, and Middle Eastern influences. Travel through this truly extraordinary travel destination, experiencing incomparable Turkish delights!
                        </p>
                    </div>

                    <div className="ending-content__p">
                        <h3  style={{fontSize:"3rem", lineHeight:"2.5rem"}}>
                            Incredible Istanbul
                        </h3>
                        <p  style={{fontSize:"large", lineHeight:"3.5rem"}}>
                            Get ready to explore the dynamic city of Istanbul, a city that straddles both Asia and Europe! As a result, it has both the European beauty of ancient, and colorful buildings, combined with Asian spirituality and flavors. Discover the delights of a modern, metropolitan city, that has all the dazzling beauty of the past, and the grace of Islam. Seen within the ancient spice bazaars, spectacular mosques, and palaces with luxurious interiors as beautifully intricate as their exteriors. Relax after an eventful day of history and culture, with a rooftop view and endless choices of mouth-watering Turkish food. Be it sweet baklava, legendary Turkish kebab, or delicious mezze, Turkish food is loved the world over.
                        </p>
                    </div>

                    <div className="ending-content__p">
                        <h3  style={{fontSize:"3rem", lineHeight:"2.5rem"}}>
                            Fairytale Landscapes
                        </h3>
                        <p  style={{fontSize:"large", lineHeight:"3.5rem"}}>
                            Unforgettable experiences await those traveling through the magical Turkish landscapes. Turquoise waters lap at soft white sand, sweeping bays hug beautiful cliffs, and epic ocean roads make for memorable road trips. Once finished on land, go sky high by paragliding over lagoons and oceans, or hot air ballooning above the enchanting cave houses and canyons of Cappadocia. Whether it’s learning about history, undertaking adrenaline-inducing activities, or experiencing fairytale landscapes, Turkey will satisfy countless desires.
                        </p>
                    </div>

                </div>
            </Container>

        </>
    );
};

export default Turkey;