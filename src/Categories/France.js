import React, {useRef} from 'react';
import './styles.css';
import {Link} from "react-router-dom";
import {Col, Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";

const France = () => {
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
                                        <div className={'category-cover-title'} style={{fontSize: "12rem"}} title={'France'}>
                                            France
                                        </div>
                                    </h1>
                                    <p style={{fontSize:"1.6rem", fontWeight:"light", width:"400px"}} className={'category-cover-excerpt'}>

                                        Famed for its Eiffel Tower, Art museums, stunning beaches and snow-capped Alps including Europe's tallest peak.
                                    </p>
                                </div>
                            </h1>
                        </Col>
                        <Col className={'page-cover-image me-5'}  style={{marginLeft: "5rem", marginTop: "-20rem", marginBottom: "20rem"}} >
                            <img className={'page-cover_image'} src={require('../images/columbia/cover.jpg')}
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
                                        <span style={{fontSize:"1.6rem"}}>March to October is the best time to visit France</span>
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
                                        <span style={{fontSize:"1.6rem"}}>The currency in France is Euro. 1 USD is equivalent to 0.90 Euro.</span>
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
                                    <img className="page-content__search-icon" src={require("../images/france/search.jpg")} alt="icon images"/>
                                    <a href="src/components/Asia#"><span className="page-content__search-link">PARIS</span></a>
                                </li>
                                <li className="page-content__search-li mt-3  mb-1">
                                    <img className="page-content__search-icon" src={require("../images/france/search4.jpg")} alt="icon images"/>
                                    <a href="src/components/Asia#"><span className="page-content__search-link">FRENCH RIVIERA</span></a>
                                </li>
                                <li className="page-content__search-li mt-3  mb-1">
                                    <img className="page-content__search-icon" src={require("../images/france/search3.jpg")} alt="icon images"/>
                                    <a href="src/components/Asia#"><span className="page-content__search-link">DORDOGNE</span></a>
                                </li>
                                <li className="page-content__search-li mt-3  mb-1">
                                    <img className="page-content__search-icon" src={require("../images/france/search6.jpg")} alt="icon images"/>
                                    <a href="src/components/Asia#"><span className="page-content__search-link">BORDEAUX</span></a>
                                </li>
                                <li className="page-content__search-li mt-3  mb-1">
                                    <img className="page-content__search-icon" src={require("../images/france/search5.jpg")} alt="icon images"/>
                                    <a href="src/components/Asia#"><span className="page-content__search-link">NICE</span></a>
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
                                <img className="article-img__img" src={require("../images/france/article.jpg")} alt="article picture"/>
                            </div>
                            <div className="div">
                             <span>
                                 <img style={{width: "8rem"}} className={'salt-icon'} src={require("../images/icons/lightbulb.png")}/>
                             </span>
                                <div className="article-heading">
                                    <h1 className="text-center container w-75" style={{fontSize:"3rem"}}>France travel guide: A complete 3-week itinerary</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Container>
            {/*page content intro article*/}
            <Container>
                <div className="must-do section container" style={{marginTop:"10rem"}}>
                    <h1 style={{fontWeight:"bolder", fontSize:"3rem"}} className="mb-3">MUST DO IN FRANCE</h1>
                    <div className="d-flex justify-content-between">
                        <div className="must-do__img-container">
                            <img className="must-do__img" src={require("../images/france/mustdo.jpg")} alt="title"/>
                            <div className="must-do__title">
                                <div>
                                    <span>11 things to do in Nice</span><br/>France<br/>
                                    <span className="must-do__tag">France</span>
                                </div>
                            </div>
                        </div>
                        <div className="must-do__img-container">
                            <img className="must-do__img text-white" src={require("../images/france/mustdo1.jpg")} />
                            <div className="must-do__title">
                                <span>11 things to do in Paris, <br/>France</span><br/>
                                <span className="must-do__tag">France</span>
                            </div>
                        </div>
                        <div className="must-do__img-container">
                            <img className="must-do__img" src={require("../images/france/mustdo2.jpg")} />
                            <div className="must-do__title">
                                <span>Trekking in France, on <br/>Complete guide</span><br/>
                                <span className="must-do__tag">France</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container>
                <div className="section ending-content container">
                    <div className="ending-content__p">
                        <h3  style={{fontSize:"3rem", lineHeight:"2.5rem"}}>
                            France
                        </h3 >
                        <p  style={{fontSize:"large", lineHeight:"3.5rem"}}>
                            France: a nation that breathes life into ‘love’, and home to the most romantic and elegant cities in the world. Most known for its capital city Paris, travelers flock from all over the world to experience its breathtaking beauty. Discover enchanting cobbled streets, fairytale architecture, and a soulful atmosphere. Dine by candlelight, jump between pastry shops or stroll leisurely along the River Seine and underneath the dazzling Eiffel Tower. Paris is a true lothario, stealing hearts, and charming over and over again.
                        </p>
                    </div>

                    <div className="ending-content__p">
                        <h3  style={{fontSize:"3rem", lineHeight:"2.5rem"}}>
                            World-Famous Scenery
                        </h3>
                        <p  style={{fontSize:"large", lineHeight:"3.5rem"}}>
                            If travelers can bear to drag themselves away from the magical sights of Paris, there are plenty more treasures waiting. Drive through golden fields of grass swaying in the breeze, and fantastic vineyards that make the best wine in the world! Alternatively, wander amongst enchanting castles, or along the glamorous azure coastline of the French Riviera.
                        </p>
                    </div>

                    <div className="ending-content__p">
                        <h3  style={{fontSize:"3rem", lineHeight:"2.5rem"}}>
                            Elegant France
                        </h3>
                        <p  style={{fontSize:"large", lineHeight:"3.5rem"}}>
                            It’s true that France is the height of sophistication, glamour, and decadence. Do as the French do and dine on endless delicious cheeses, the best bread and pastries, mouthwatering Michelin star meals, and the finest champagne. There’s nowhere quite like it in the world: a place where every dream can be achieved. All the while, to the sounds of beautiful music, the smells of fantastic food, and stunning sights that vary from the lavender fields of Provence to the spectacular peaks of the French Alps. France is waiting to charm, impress, and satisfy every travel craving.
                        </p>
                    </div>

                </div>
            </Container>

        </>
    );
};

export default France;