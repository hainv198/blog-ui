import {Col, Row} from "react-bootstrap";
import React, {useRef} from 'react';

const Columbia = () => {
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
                                    <div style={{fontSize: "2.5em"}} className={'category-cover-title'} title={'Columbia'}>
                                        Columbia
                                    </div>
                                </h1>
                                <p style={{fontSize: ".4em"}} className={'category-cover-excerpt'}>
                                    Where skyscrapers sit next to quaint pueblos, and emerald green jungle quickly turns into otherworldly desert.
                                </p>
                            </div>
                        </h1>
                    </Col>
                    <Col className={'page-cover-image'} style={{height:"600px"}}>
                        <img className={'page-cover_image'} src={require("../images/columbia/article.jpg")}
                             alt={'10 Best Beaches in Sri Lanka'} height="600px" style={{aspectRatio: 4/3}} />
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
                                    <span>March to October is the best time to visit Columbia</span>
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
                <h2 className="mb-3">MUST DO IN COLUMBIA</h2>
                <div className="d-flex justify-content-between row">
                    <div className="must-do__img-container">
                        <img className="must-do__img" src={require("../images/columbia/mustdo1.jpg")} alt="title"/>
                        <div className="must-do__title">
                            <h4>15 things to do in Bogota, <br/>Columbia</h4>
                            <span className="must-do__tag">Columbia</span>
                        </div>
                    </div>
                    <div className="must-do__img-container">
                        <img className="must-do__img text-white" src={require("../images/columbia/mustdo.jpg")} />
                        <div className="must-do__title">
                            <h4>7 Best Things to o in Kas,<br/>Columbia</h4>
                            <span className="must-do__tag">Columbia</span>
                        </div>
                    </div>
                    <div className="must-do__img-container">
                        <img className="must-do__img" src={require("../images/columbia/mustdo2.jpg")} />
                        <div className="must-do__title">
                            <h4>Best things to do in Salento<br/>Columbia</h4>
                            <span className="must-do__tag">Columbia</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section ending-content container">
                <div className="ending-content__p">
                    <h3>
                        Colombia
                    </h3>
                    <p>
                        Colombia is a country of two sides, a place where skyscrapers sit next to quaint pueblos, and emerald green jungle quickly turns into otherworldly desert. The unique blend of landscapes and experiences you’ll find here is second to none–always unexpectedly beautiful. Its turbulent history of gang rivalry and drug cartels is partly to blame, with visitors shocked to find united communities and smiling locals. However, this history is also what makes Colombia special, giving every suburb, corner, and crevice of the land a deep nostalgia for what has been and an appreciation of what’s to come.
                    </p>
                </div>

                <div className="ending-content__p">
                    <h3>
                        Natural Gifts
                    </h3>
                    <p>
                        Some of the most extraordinary natural experiences on the planet are to be found in Colombia, whether it’s riding through the world’s tallest palm trees, hiking in the Andes, or snorkeling in Caribbean coastal waters. Among these landscapes, discover lost cities, underground salt mines, and puzzling natural phenomena—each with an ancient story that forms the backbone of Colombia’s heritage.
                    </p>
                </div>

            </div>

        </>
    );
};

export default Columbia;