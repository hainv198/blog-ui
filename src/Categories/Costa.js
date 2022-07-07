import React, {useRef} from 'react';
import './styles.css';
import {Link} from "react-router-dom";
import {Col, Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";

const Costarica = () => {
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
                                        <div className={'category-cover-title'} style={{fontSize: "10rem", fontWeight:"bolder", width:"800px"}} title={'Costa Rica'}>
                                            Costa Rica
                                        </div>
                                    </h1>
                                    <p style={{fontSize:"1.6rem", fontWeight:"light", width:"400px"}} className={'category-cover-excerpt'}>
                                        From the tropical jungle to the paradise beaches: Costa Rica is wildlife heaven and a must-visit for nature lovers.
                                    </p>
                                </div>
                            </h1>
                        </Col>
                        <Col className={'page-cover-image me-5'}  style={{marginLeft: "5rem", marginTop: "-10rem", marginBottom: "10rem"}} >
                            <img className={'page-cover_image'} src={require('../images/costa/cover.jpg')}
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
                                        <span style={{fontSize:"1.6rem"}}>March to October is the best time to visit Costa Rica</span>
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
                                        <span style={{fontSize:"1.6rem"}}>The currency in Costa Rica is Colones. 1 USD is equivalent to 650 CRC.</span>
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
                                    <img className="page-content__search-icon" src={require("../images/costa/search6.jpg")} alt="icon images"/>
                                    <a href="src/components/Asia#"><span className="page-content__search-link">LA FORTUNA</span></a>
                                </li>
                                <li className="page-content__search-li mt-3  mb-1">
                                    <img className="page-content__search-icon" src={require("../images/costa/search2.jpg")} alt="icon images"/>
                                    <a href="src/components/Asia#"><span className="page-content__search-link">MANUEL ANTONIO</span></a>
                                </li>
                                <li className="page-content__search-li mt-3  mb-1">
                                    <img className="page-content__search-icon" src={require("../images/costa/search3.jpg")} alt="icon images"/>
                                    <a href="src/components/Asia#"><span className="page-content__search-link">MONTEVERDE</span></a>
                                </li>
                                <li className="page-content__search-li mt-3  mb-1">
                                    <img className="page-content__search-icon" src={require("../images/costa/search4.jpg")} alt="icon images"/>
                                    <a href="src/components/Asia#"><span className="page-content__search-link">SANTA TERESA</span></a>
                                </li>
                                <li className="page-content__search-li mt-3  mb-1">
                                    <img className="page-content__search-icon" src={require("../images/costa/search5.jpg")} alt="icon images"/>
                                    <Link to={'/page/10'}><span className="page-content__search-link">PUERTO VIEJO</span></Link>
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
                                <img className="article-img__img" src={require("../images/costa/article.jpg")} alt="article picture" style={{marginTop: "40rem", width:"82rem"}}/>
                            </div>
                            <div className="div">
                             <span>
                                 <img style={{width: "8rem"}} className={'salt-icon'} src={require("../images/icons/lightbulb.png")}/>
                             </span>
                                <div className="article-heading">
                                    <h1 className="text-center container w-75" style={{fontSize:"3rem"}}>Costa Rica travel guide: A complete 3-week itinerary</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Container>
            {/*page content intro article*/}
            <Container>
                <div className="must-do section container" style={{marginTop:"10rem"}}>
                    <h1 style={{fontWeight:"bolder", fontSize:"3rem"}} className="mb-3">MUST DO IN COSTA RICA</h1>
                    <div className="d-flex justify-content-between">
                        <div className="must-do__img-container">
                            <img className="must-do__img" src={require("../images/france/mustdo.jpg")} alt="title"/>
                            <div className="must-do__title">
                                <div>
                                    <span>11 things to do in La Fotuna</span><br/>
                                    <span className="must-do__tag">France</span>
                                </div>
                            </div>
                        </div>
                        <div className="must-do__img-container">
                            <img className="must-do__img text-white" src={require("../images/france/mustdo1.jpg")} />
                            <div className="must-do__title">
                                <span>11 things to do in Monteverde</span><br/>
                                <span className="must-do__tag">Costa Rica</span>
                            </div>
                        </div>
                        <div className="must-do__img-container">
                            <img className="must-do__img" src={require("../images/france/mustdo2.jpg")} />
                            <div className="must-do__title">
                                <span>Trekking in Monteverde<br/>Complete guide</span><br/>
                                <span className="must-do__tag">Costa Rica</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container>
                <div className="section ending-content container">
                    <div className="ending-content__p">
                        <h3  style={{fontSize:"3rem", lineHeight:"2.5rem"}}>
                            Costa Rica
                        </h3 >
                        <p  style={{fontSize:"large", lineHeight:"3.5rem"}}>
                            ‘Pura Vida’, meaning ‘simple life’, is a phrase that Costa Ricans live and breathe as they enjoy the pleasures of nature; barefoot walks on the sand, the feeling of ocean salt on the skin, and the sound of coconut trees blowing in the wind. Negativity has no home here (good vibes only!), so it’s no surprise that Costa Ricans are some of the longest-living on the planet. They truly enjoy the ‘rich coast’ for what it is—a place abundant in everything from smiles to animal species.
                        </p>
                    </div>

                    <div className="ending-content__p">
                        <h3  style={{fontSize:"3rem", lineHeight:"2.5rem"}}>
                            Where Serenity and Excitement Collide
                        </h3>
                        <p  style={{fontSize:"large", lineHeight:"3.5rem"}}>
                            Despite the serenity of nature, it is one of the best places to seek your adrenaline hit. People come from all over the world to zipline over rare cloud forests, rock climb on the edge of bubbling hot springs, trek close to active volcanos, and surf off protected beaches. For a unique experience, choose to camp in Costa Rica—waking up to parrots flying across the misty jungle and monkeys swinging among the rainforest canopy.
                        </p>
                    </div>

                    <div className="ending-content__p">
                        <h3  style={{fontSize:"3rem", lineHeight:"2.5rem"}}>
                            An Ecological Wonderland
                        </h3>
                        <p  style={{fontSize:"large", lineHeight:"3.5rem"}}>
                            Locals deeply respect nature, enforced by strict government laws to preserve and protect the biodiversity that makes Costa Rica so unique. It’s also a particularly environmentally-friendly country, with a strong focus on conscious tourism. Here eco-lodges blend into the jungle, and people give back to the land far more than they take. All this, and more, make Costa Rica a must-see destination for any traveler.
                        </p>
                    </div>

                </div>
            </Container>

        </>
    );
};

export default Costarica;