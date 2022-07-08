import React, {useRef} from 'react';
import './styles.css';
import {Link} from "react-router-dom";
import {Col, Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";

const Columbia = () => {
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
                                        <div className={'category-cover-title'} style={{fontSize: "11rem"}} title={'Colombia'}>
                                            Colombia
                                        </div>
                                    </h1>
                                    <p style={{fontSize:"1.6rem", fontWeight:"light", width:"400px"}} className={'category-cover-excerpt'}>
                                        Where skyscrapers sit next to quaint pueblos, and emerald green jungle quickly turns into otherworldly desert.
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
                                        <span style={{fontSize:"1.6rem"}}>March to October is the best time to visit Columbia</span>
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
                                        <span style={{fontSize:"1.6rem"}}>The currency in Colombia is Peso. 1 USD is equivalent to 4000 COP.</span>
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
                        <div>


                            <div className="page-content__search">
                                <h3 className="search-title__heading">Pick a destination</h3>
                                <ul className="page-content__search-ul">
                                    <li className="page-content__search-li mt-3 mb-1">
                                        <img className="page-content__search-icon" src={require("../images/columbia/search4.jpg")} alt="icon images"/>
                                        <Link to={'/page/9'}><span className="page-content__search-link">BOGOTA</span></Link>
                                    </li>
                                    <li className="page-content__search-li mt-3  mb-1">
                                        <img className="page-content__search-icon" src={require("../images/columbia/cover.jpg")} alt="icon images"/>
                                        <a href="src/components/Asia#"><span className="page-content__search-link">CARTAGENA</span></a>
                                    </li>
                                    <li className="page-content__search-li mt-3  mb-1">
                                        <img className="page-content__search-icon" src={require("../images/columbia/article.jpg")} alt="icon images"/>
                                        <a href="src/components/Asia#"><span className="page-content__search-link">MEDELLIN</span></a>
                                    </li>
                                    <li className="page-content__search-li mt-3  mb-1">
                                        <img className="page-content__search-icon" src={require("../images/columbia/mustdo1.jpg")} alt="icon images"/>
                                        <a href="src/components/Asia#"><span className="page-content__search-link">PALOMINO</span></a>
                                    </li>
                                    <li className="page-content__search-li mt-3  mb-1">
                                        <img className="page-content__search-icon" src={require("../images/columbia/mustdo2.jpg")} alt="icon images"/>
                                        <a href="src/components/Asia#"><span className="page-content__search-link">SALENTO</span></a>
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

                            <div className="page-content-article-mobile" style={{display:"none"}} >
                                <div className="article-img img-img">
                                    {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                                    <img className="article-img__img" src={require("../images/columbia/article.jpg")} alt="article picture"/>
                                </div>
                                <div className="div">
                             <span>
                                 <img style={{width: "8rem"}} className={'salt-icon'} src={require("../images/icons/lightbulb.png")}/>
                             </span>
                                    <div className="article-heading">
                                        <h1 className="text-center container w-75" style={{fontSize:"3rem"}}>Colombia travel guide: A complete 3-week itinerary</h1>
                                    </div>
                                </div>
                            </div>


                        </div>

                        <div className="page-content-article" >
                            <div className="article-img img-img">
                                {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                                <img className="article-img__img" src={require("../images/columbia/article.jpg")} alt="article picture"/>
                            </div>
                            <div className="div">
                             <span>
                                 <img style={{width: "8rem"}} className={'salt-icon'} src={require("../images/icons/lightbulb.png")}/>
                             </span>
                                <div className="article-heading">
                                    <h1 className="text-center container w-75" style={{fontSize:"3rem"}}>Colombia travel guide: A complete 3-week itinerary</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Container>
            {/*page content intro article*/}
            <Container>
                <div className="must-do row section container" style={{marginTop:"10rem"}}>
                    <h1 style={{fontWeight:"bolder", fontSize:"3rem"}} className="mb-3">MUST DO IN COLOMBIA</h1>
                    <div className="d-flex justify-content-between">
                        <div className="must-do__img-container">
                            <img className="must-do__img" src={require("../images/columbia/mustdo2.jpg")} alt="title"/>
                            <div className="must-do__title">
                                <div>
                                    <span>11 things to do in Marrakech</span><br/>
                                    <span className="must-do__tag">Colombia</span>
                                </div>
                            </div>
                        </div>
                        <div className="must-do__img-container">
                            <img className="must-do__img text-white" src={require("../images/columbia/mustdo1.jpg")} />
                            <div className="must-do__title">
                                <span>11 things to do in Fes, <br/>Colombia</span><br/>
                                <span className="must-do__tag">Colombia</span>
                            </div>
                        </div>
                        <div className="must-do__img-container">
                            <img className="must-do__img" src={require("../images/columbia/mustdo.jpg")} />
                            <div className="must-do__title">
                                <span>Trekking in Morocco, on <br/>Complete guide</span><br/>
                                <span className="must-do__tag">Colombia</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container>
                <div className="section ending-content container">
                    <div className="ending-content__p">
                        <h3  style={{fontSize:"3rem", lineHeight:"2.5rem"}}>
                            Colombia
                        </h3 >
                        <p  style={{fontSize:"large", lineHeight:"3.5rem"}}>
                            Colombia is a country of two sides, a place where skyscrapers sit next to quaint pueblos, and emerald green jungle quickly turns into otherworldly desert. The unique blend of landscapes and experiences you’ll find here is second to none–always unexpectedly beautiful. Its turbulent history of gang rivalry and drug cartels is partly to blame, with visitors shocked to find united communities and smiling locals. However, this history is also what makes Colombia special, giving every suburb, corner, and crevice of the land a deep nostalgia for what has been and an appreciation of what’s to come.
                        </p>
                    </div>

                    <div className="ending-content__p">
                        <h3  style={{fontSize:"3rem", lineHeight:"2.5rem"}}>
                            Natural Gifts
                        </h3>
                        <p  style={{fontSize:"large", lineHeight:"3.5rem"}}>
                            Some of the most extraordinary natural experiences on the planet are to be found in Colombia, whether it’s riding through the world’s tallest palm trees, hiking in the Andes, or snorkeling in Caribbean coastal waters. Among these landscapes, discover lost cities, underground salt mines, and puzzling natural phenomena—each with an ancient story that forms the backbone of Colombia’s heritage.
                        </p>
                    </div>

                    <div className="ending-content__p">
                        <h3  style={{fontSize:"3rem", lineHeight:"2.5rem"}}>
                            The Land of Food & Fiesta
                        </h3>
                        <p  style={{fontSize:"large", lineHeight:"3.5rem"}}>
                            Food and fiesta are integral to Colombians, with families and friends finding any excuse to gather and enjoy home-cooked arepas or take to the streets and salsa dance. And it’s not just dancing and food that serves as a means of creative expression; in Colombia, art is everything, bringing people together and changing the lives of many. In previously dangerous suburbs, like Communa 13 in Medellin, communities have grown and changed with the arrival of street art, painting murals with an important political message. These colors will remain imprinted on your memory forever; there’s always a rainbow of emotions, flavors, and stories to be found in beautiful Colombia!
                        </p>
                    </div>

                </div>
            </Container>

        </>
    );
};

export default Columbia;