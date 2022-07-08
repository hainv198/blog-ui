import React, {useRef} from 'react';
import './styles.css';
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
                        <Col className={'mt-5'}  style={{marginLeft: "5rem"}}>
                            <h1>
                                <div className={'category-cover-left'}>
                                    <h1 className={'category-cover-left__heading'}>
                                        <span className={'category-cover-subtitle'}>Travel in</span>
                                        <div className={'category-cover-title'} style={{fontSize: "15rem"}} title={'Europe'}>
                                            Europe
                                        </div>
                                    </h1>
                                    <p style={{fontSize:"1.6rem", fontWeight:"light"}} className={'category-cover-excerpt'}>
                                        Architectural masterpieces, beautiful nature, and fantastic culinary diversity.
                                    </p>
                                </div>
                            </h1>
                        </Col>
                        <Col className={'page-cover-image me-5'}  style={{marginLeft: "5rem"}} >
                            <img style={{marginTop: "10rem"}} className={'page-cover_image'} src={require('../images/europe/cover.jpg')}
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
                                        <h5><strong>Did you know?</strong></h5>
                                        <span>The world’s second-largest food exporter is the Netherlands, just after the USA, which is 237 times larger in size!</span>
                                    </div>
                                </div>
                                <div className={'category-cover-right-top mt-3'}>
                                    <div className={'category-cover-right-icon text-center'}>
                                    <span>
                                         <img className={'salt-icon w-25'} src={require("../images/icons/ticket.png")}/>
                                    </span>
                                    </div>
                                    <div className="right-content-text">
                                        <h5><strong>Europe</strong></h5>
                                        <span>A total of 44 countries with The Vatican as the world’s smallest country!</span>
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
                                    <img className="page-content__search-icon" src={require("../images/europe/search3.jpg")} alt="icon images"/>
                                    <a href="src/components/Asia#"><span className="page-content__search-link">CZECH REPUBLIC</span></a>
                                </li>
                                <li className="page-content__search-li mt-3  mb-1">
                                    <img className="page-content__search-icon" src={require("../images/europe/search5.jpg")} alt="icon images"/>
                                    <Link to={'/categories/france'}><span className="page-content__search-link">FRANCE</span></Link>
                                </li>
                                <li className="page-content__search-li mt-3  mb-1">
                                    <img className="page-content__search-icon" src={require("../images/europe/search2.jpg")} alt="icon images"/>
                                    <Link to={'/page/12'}><span className="page-content__search-link">HUNGARY</span></Link>
                                </li>
                                <li className="page-content__search-li mt-3  mb-1">
                                    <img className="page-content__search-icon" src={require("../images/europe/search6.jpg")} alt="icon images"/>
                                    <Link to={'/page/8'}><span className="page-content__search-link">ITALY</span></Link>
                                </li>
                                <li className="page-content__search-li mt-3  mb-1">
                                    <img className="page-content__search-icon" src={require("../images/europe/search1.jpg")} alt="icon images"/>
                                    <Link to={'/categories/turkey'}><span className="page-content__search-link">TURKEY</span></Link>
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
                            <div className="article-img img-img" style={{width: "68rem"}}>
                                {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                                <img className="article-img__img" src={require("../images/europe/article.jpg")} alt="article picture" style={{width: "80rem", marginTop: "30rem"}}/>
                            </div>
                            <div className="div">
                             <span>
                                 <img style={{width: "8rem"}} className={'salt-icon'} src={require("../images/icons/lightbulb.png")}/>
                             </span>
                                <div className="article-heading">
                                    <h1 className="text-center container w-75" style={{fontSize:"3rem"}}>10 best city trips of Europe in 2021</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Container>
            {/*page content intro article*/}
            <Container>
                <div className="must-do section container" style={{marginTop:"10rem"}}>
                    <h1 style={{fontWeight:"bolder", fontSize:"3rem"}} className="mb-3">MUST DO IN EUROPE</h1>
                    <div className="d-flex row justify-content-between">
                        <div className="must-do__img-container">
                            <img className="must-do__img" src={require("../images/europe/mustdo2.jpg")} alt="title"/>
                            <div className="must-do__title">
                                <div>
                                    <span>11 things to do in Venice (City trip guide)</span><br/>
                                    <span className="must-do__tag">Italy</span>
                                </div>
                            </div>
                        </div>
                        <div className="must-do__img-container">
                            <img className="must-do__img text-white" src={require("../images/europe/mustdo1.jpg")} />
                            <div className="must-do__title">
                                <span>11 best things to do in Budapest, Hungary</span><br/>
                                <span className="must-do__tag">Hungary</span>
                            </div>
                        </div>
                        <div className="must-do__img-container">
                            <img className="must-do__img" src={require("../images/europe/mustdo3.jpg")} />
                            <div className="must-do__title">
                                <span>Iceland travel guide: 3-week trip</span><br/>
                                <span className="must-do__tag">Iceland</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container>
                <div className="section ending-content container">
                    <div className="ending-content__p">
                        <h3  style={{fontSize:"3rem", lineHeight:"2.5rem"}}>
                            Europe
                        </h3 >
                        <p  style={{fontSize:"large", lineHeight:"3.5rem"}}>
                            Europe is the continent of hopeless romantics. A place that radiates warmth, happiness, and enchantment in the form of hot summer nights, under the stars. By day, wander picturesque streets, laughing and chatting, or dip salty, sunkissed skin in beautiful blue waters. Continue to feed the soul by visiting the most sensational cities in the world! Each magical European city writes a love letter to the past, through its buildings and customs. For example, the abstract works of Gaudi in Barcelona, the love lock bridge of Paris, or the exotic grand bazaar of Istanbul. Alternatively, get ready for an epic adventure through the ages. Discover wonders like the majestic acropolis in Athens, the magnificent Colosseum in Rome, or the remarkable floating city of Venice.Europe is the continent of hopeless romantics. A place that radiates warmth, happiness, and enchantment in the form of hot summer nights, under the stars. By day, wander picturesque streets, laughing and chatting, or dip salty, sunkissed skin in beautiful blue waters. Continue to feed the soul by visiting the most sensational cities in the world! Each magical European city writes a love letter to the past, through its buildings and customs. For example, the abstract works of Gaudi in Barcelona, the love lock bridge of Paris, or the exotic grand bazaar of Istanbul. Alternatively, get ready for an epic adventure through the ages. Discover wonders like the majestic acropolis in Athens, the magnificent Colosseum in Rome, or the remarkable floating city of Venice.
                        </p>
                    </div>

                    <div className="ending-content__p">
                        <h3  style={{fontSize:"3rem", lineHeight:"2.5rem"}}>
                            Crossing Borders and Cultures
                        </h3>
                        <p  style={{fontSize:"large", lineHeight:"3.5rem"}}>
                            Each nation, however small, has its own unique culture and language. As a result, Europe is one of a kind. In just 24 hours several countries could be visited, each with a different beauty, landscape, culture, and language. Experience the icy charm of northern Europe, with its epic fjords, snow-capped mountains, frosty blue lakes, and hilltop castles. Together with the vibrancy of southern Europe, with its colorful houses, street art, shady cobbled streets, bustling plazas, and heavenly islands. The diversity of a continent which stretches as far as the Arctic Circle, and borders both Africa and Asia, is hard to beat.
                        </p>
                    </div>

                </div>
            </Container>

        </>
    );
};

export default Europe;