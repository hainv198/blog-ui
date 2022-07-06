import {Col, Row} from "react-bootstrap";
import React, {useRef} from 'react';
import styles from './styles.css'

const Costa = () => {
    let inputRef = useRef();
    return (
        <>
            <header className={'header'}>
                <Row className={'mt-5 align-items-center cover-text-header'}>
                    <Col className={'mt-5 cover-text'}>
                        <h1>
                            <div className={'category-cover-left'}>
                                <h1>
                                    <span className={'category-cover-subtitle'}>Travel in</span>
                                    <div style={{fontSize: "3.5em"}} className={'category-cover-title'} title={'Costa'}>
                                        Costa
                                    </div>
                                </h1>
                                <p style={{fontSize: ".4em"}} className={'category-cover-excerpt'}>
                                    From the postcard-perfect beaches and mountain ranges, to its charming cobblestone streets that are perfect for sipping tea and having baklava.
                                </p>
                            </div>
                        </h1>
                    </Col>
                    <Col className={'page-cover-image'}>
                        <img className={'page-cover_image'} src={require("../images/turkey/article.jpg")}
                             alt={'10 Best Beaches in Sri Lanka'}/>
                    </Col>
                    <Col className>
                        <div className={'category-cover-right align-items-end'}>
                            <div className={'category-cover-right-top mt-3'}>
                                <div className={'category-cover-right-icon text-center'}>
                                    <span>
                                        <img className={'salt-icon w-25'} src={require("../images/icons/lightbulb.png")}/>
                                    </span>
                                </div>
                                <div className="right-content-text">
                                    <h5><strong>Best time to travel</strong></h5>
                                    <span>March to October is the best time to visit Costa</span>
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
                                    <span>March to October is the best time to visit Costa</span>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </header>
            <div className="div-bg">

                <div className="page-content container d-flex mt-5 justify-content-between">
                    <div className="page-content__search">
                        <h3 className="search-title__heading text-center">Pick a destination</h3>
                        <ul className="page-content__search-ul">
                            <li className="page-content__search-li mt-3 mb-1">
                                <img className="page-content__search-icon" src={require("../images/turkey/turkey3.jpg")} alt="icon images"/>
                                <a href="src/components/turkey#"><span className="page-content__search-link">ANTALYA</span></a>
                            </li>
                            <li className="page-content__search-li mt-3  mb-1">
                                <img className="page-content__search-icon" src={require("../images/turkey/turkey2.jpg")} alt="icon images"/>
                                <a href="src/components/turkey#"><span className="page-content__search-link">CAPPADOCIA</span></a>
                            </li>
                            <li className="page-content__search-li mt-3  mb-1">
                                <img className="page-content__search-icon" src={require("../images/turkey/turkey.jpg")} alt="icon images"/>
                                <a href="src/components/turkey#"><span className="page-content__search-link">FETHIYE</span></a>
                            </li>
                            <li className="page-content__search-li mt-3  mb-1">
                                <img className="page-content__search-icon" src={require("../images/turkey/turkey1.jpg")} alt="icon images"/>
                                <a href="src/components/turkey#"><span className="page-content__search-link">ISTANBUL</span></a>
                            </li>
                            <li className="page-content__search-li mt-3  mb-1">
                                <img className="page-content__search-icon" src={require("../images/turkey/mustdo1.jpg")} alt="icon images"/>
                                <a href="src/components/turkey#"><span className="page-content__search-link">ISTANBUL</span></a>
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
                        <div className="article-img ">
                            {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                            <img className="article-img__img" src={require("../images/turkey/saltinourhair-turkey.jpg")} alt="article picture"/>
                        </div>
                        <div className="div">
                            <div className="article-img__span">

                            </div>
                            <div className="article-heading">
                                <h1 className="text-center container w-75">Turkey Travel Guide: The Ultimate 2-week Itinerary</h1>
                            </div>
                        </div>
                    </div>
                    <div className="must-do-content section container d-flex justify-content-between">

                    </div>
                </div>
            </div>
            {/*page content intro article*/}
            <div className="must-do section container">
                <h2 className="mb-3">MUST DO IN TURKEY</h2>
                <div className="d-flex justify-content-between row">
                    <div className="must-do__img-container">
                        <img className="must-do__img" src={require("../images/turkey/mustdo2.jpg/")} alt="title"/>
                        <div className="must-do__title">
                            <h4>11 things to do in Istanbul, <br/>Turkey</h4>
                            <span className="must-do__tag">Turkey</span>
                        </div>
                    </div>
                    <div className="must-do__img-container">
                        <img className="must-do__img text-white" src={require("../images/turkey/mustdo1.jpg")} />
                        <div className="must-do__title">
                            <h4>7 Best Things to o in Kas,<br/>Turkey</h4>
                            <span className="must-do__tag">Turkey</span>
                        </div>
                    </div>
                    <div className="must-do__img-container">
                        <img className="must-do__img" src={require("../images/turkey/mustdo3.jpg")} />
                        <div className="must-do__title">
                            <h4>Istanbul's Must-see: The colorful<br/>Houses of Balat</h4>
                            <span className="must-do__tag">Turkey</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section ending-content container">
                <div className="ending-content__p">
                    <h3>
                        Turkey
                    </h3>
                    <p>
                        Transcontinental Turkey: a remarkable country where continents and cultures blend together, resulting in unique Asian, European, and Middle Eastern influences. Travel through this truly extraordinary travel destination, experiencing incomparable Turkish delights!
                    </p>
                </div>

                <div className="ending-content__p">
                    <h3>
                        Incredible Istanbul
                    </h3>
                    <p>
                        Get ready to explore the dynamic city of Istanbul, a city that straddles both Asia and Europe! As a result, it has both the European beauty of ancient, and colorful buildings, combined with Asian spirituality and flavors. Discover the delights of a modern, metropolitan city, that has all the dazzling beauty of the past, and the grace of Islam. Seen within the ancient spice bazaars, spectacular mosques, and palaces with luxurious interiors as beautifully intricate as their exteriors. Relax after an eventful day of history and culture, with a rooftop view and endless choices of mouth-watering Turkish food. Be it sweet baklava, legendary Turkish kebab, or delicious mezze, Turkish food is loved the world over.
                    </p>
                </div>

            </div>

        </>
    );
};

export default Costa;