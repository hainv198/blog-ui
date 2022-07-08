import React, {useRef} from 'react';
import './styles.css';
import {Link} from "react-router-dom";
import {Col, Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";

const Asia = () => {
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
                                        <div className={'category-cover-title'} style={{fontSize: "18rem"}} title={'ASIA'}>
                                            ASIA
                                        </div>
                                    </h1>
                                    <p style={{fontSize:"1.6rem", fontWeight:"light"}} className={'category-cover-excerpt'}>
                                        Majestic Asia! An incredible continent that has something to offer for any kind of
                                        traveler.
                                    </p>
                                </div>
                            </h1>
                        </Col>
                        <Col className={'page-cover-image me-5'}  style={{marginLeft: "5rem"}} >
                            <img className={'page-cover_image'}
                                 srcSet={'https://static.saltinourhair.com/wp-content/uploads/2020/05/23120157/saltinourhair-asia-768x768.jpg 768w, https://static.saltinourhair.com/wp-content/uploads/2020/05/23120157/saltinourhair-asia-1024x1024.jpg 1024w, https://static.saltinourhair.com/wp-content/uploads/2020/05/23120157/saltinourhair-asia-1080x1080.jpg 1350w, https://static.saltinourhair.com/wp-content/uploads/2020/05/23120157/saltinourhair-asia-1440x1440.jpg 1800w, https://static.saltinourhair.com/wp-content/uploads/2020/05/23120157/saltinourhair-asia.jpg'}
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
                                        <span>Out of all rice eaten in the world, 90% is consumed in Asia! And all Vietnamese people share the same birthday</span>
                                    </div>
                                </div>
                                <div className={'category-cover-right-top mt-3'}>
                                    <div className={'category-cover-right-icon text-center'}>
                                    <span>
                                         <img className={'salt-icon w-25'} src={require("../images/icons/ticket.png")}/>
                                    </span>
                                    </div>
                                    <div className="right-content-text">
                                        <h5><strong>Asia</strong></h5>
                                        <span>With 48 countries it is the world’s largest continent.</span>
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
                                    <img className="page-content__search-icon" src={require("../images/asia/search5.jpg")} alt="icon images"/>
                                    <a href="src/components/Asia#"><span className="page-content__search-link">BALI</span></a>
                                </li>
                                <li className="page-content__search-li mt-3  mb-1">
                                    <img className="page-content__search-icon" src={require("../images/asia/search3.jpg")} alt="icon images"/>
                                    <a href="src/components/Asia#"><span className="page-content__search-link">CAMBODIA</span></a>
                                </li>
                                <li className="page-content__search-li mt-3  mb-1">
                                    <img className="page-content__search-icon" src={require("../images/columbia/article.jpg")} alt="icon images"/>
                                    <Link to={'/categories/vietnam'}><span className="page-content__search-link">VIETNAM</span></Link>
                                </li>
                                <li className="page-content__search-li mt-3  mb-1">
                                    <img className="page-content__search-icon" src={require("../images/columbia/mustdo1.jpg")} alt="icon images"/>
                                    <a href="src/components/Asia#"><span className="page-content__search-link">THAILAND</span></a>
                                </li>
                                <li className="page-content__search-li mt-3  mb-1">
                                    <img className="page-content__search-icon" src={require("../images/columbia/mustdo2.jpg")} alt="icon images"/>
                                    <a href="src/components/Asia#"><span className="page-content__search-link">INDONESIA</span></a>
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
                                    <h1 className="text-center container w-75" style={{fontSize:"3rem"}}>11 Best Things To Do In Luang Prabang</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Container>
            {/*page content intro article*/}
            <Container>
                <div className="must-do row section container" style={{marginTop:"10rem"}}>
                    <h1 style={{fontWeight:"bolder", fontSize:"3rem"}} className="mb-3">MUST DO IN ASIA</h1>
                    <div className="d-flex justify-content-between">
                        <div className="must-do__img-container">
                            <img className="must-do__img" src={require("../images/asia/mustdo2.jpg")} alt="title"/>
                            <div className="must-do__title">
                                <div>
                                    <span>Java Travel Guide: Best thing to do (8 days)</span><br/>
                                    <span className="must-do__tag">Indonesia</span>
                                </div>
                            </div>
                        </div>
                        <div className="must-do__img-container">
                            <img className="must-do__img text-white" src={require("../images/image2.jpg")} />
                            <div className="must-do__title">
                                <span>10 Best places to visit in Sri Lanka</span><br/>
                                <span className="must-do__tag">Sri Lanka</span>
                            </div>
                        </div>
                        <div className="must-do__img-container">
                            <img className="must-do__img" src={require("../images/images3.jpg")} />
                            <div className="must-do__title">
                                <span>Vietnam travel guide: 30-week itinerary</span><br/>
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
                            Asia
                        </h3 >
                        <p  style={{fontSize:"large", lineHeight:"3.5rem"}}>
                            A continent of contrasts and diversity: home to 48 incredible countries, countless ancient treasures, and stunning natural wonders. This extraordinary continent pushes boundaries, aiming to be bigger and better than any other place in the world. Discover the highest mountains, the biggest cities, the largest temples, the tallest buildings, and even the most enormous flowers! Every corner of Asia is a joy to explore, made even better by colorful countries, each unique in their character. Each one has one defining feature though- warm, friendly, and fascinating locals.
                        </p>
                    </div>

                    <div className="ending-content__p">
                        <h3  style={{fontSize:"3rem", lineHeight:"2.5rem"}}>
                            The Past Meets the Future
                        </h3>
                        <p  style={{fontSize:"large", lineHeight:"3.5rem"}}>
                            Asia is continuously ahead of the curve, always in the future, growing and developing. Because of this it’s at the forefront of technology worldwide and known globally for its cities leading the way in infrastructure and inventive design. Yet somehow, there is also a perfect contrast with the beautiful simplicity of the past. The epic history of the continent shapes Asian culture and the community- reflected spectacularly in the resilience and friendliness of the people, the preservation of beautiful ancient buildings, and customs. However, it is Asian food that remains the most beloved and preserved thing of all. Get ready to experience the mouthwatering flavors of Pho in Vietnam, the citrusy zing of Thailand, and the unbelievable spiced curries in Sri Lanka. Delicious dishes still lovingly crafted that are now popular the world over!
                        </p>
                    </div>
                    <div className="ending-content__p">
                        <h3  style={{fontSize:"3rem", lineHeight:"2.5rem"}}>
                            The Power of Nature
                        </h3>
                        <p  style={{fontSize:"large", lineHeight:"3.5rem"}}>
                            The peace and spirituality of Asia are beyond powerful. Feel it in the special energy of locals taking part in time-honored rituals. See it in the enchanting paintings covering golden temples, or in the harmony of nature as a bird sits on the back of an elephant. Everywhere a new type of landscape, climate, or community, will be waiting to greet travelers with open arms. Whether it’s on the silk road of Uzbekistan, under the dreamy cherry blossoms in Japan or South Korea, or next to coconut trees on coral-fringed beaches in the Philippines or Indonesia. Asia will give a new and exciting meaning to the words ‘paradise’ and ‘adventure’.
                        </p>
                    </div>

                </div>
            </Container>

        </>
    );
};

export default Asia;