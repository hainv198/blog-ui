import React, {useRef} from 'react';
import './styles.css';
import {Link} from "react-router-dom";
import {Col, Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";

const Egypt = () => {
    let inputRef = useRef();
    return (
        <>
            <header className={'header'}>
                <Container className="my-container">
                    <Row className={'mt-5 container-fluid align-items-center'}>
                        <Col className={'mt-5'}  style={{marginLeft: "5rem"}}>
                            <h1>
                                <div className={'category-cover-left'}  style={{marginBottom: "25rem"}}>
                                    <h1 className={'category-cover-left__heading'}>
                                        <span className={'category-cover-subtitle'}>Travel in</span>
                                        <div className={'category-cover-title'} style={{fontSize: "16rem"}} title={'Egypt'}>
                                            Egypt
                                        </div>
                                    </h1>
                                    <p style={{fontSize:"1.6rem", fontWeight:"light", width:"400px"}} className={'category-cover-excerpt'}>
                                        Sail the Nile River and discover the land of mysteries. Pyramids, ancient temples and artifacts.
                                    </p>
                                </div>
                            </h1>
                        </Col>
                        <Col className={'page-cover-image me-5'}  style={{marginLeft: "5rem", marginTop:"10rem", marginBottom: "20rem"}} >
                            <img className={'page-cover_image'} src={require('../images/egypt/cover.jpg')}
                                 alt={'10 Best Beaches in Sri Lanka'}/>
                        </Col>
                        <Col className>
                            <div className={'category-cover-right container'} style={{left:"10rem", width:"30rem",marginTop:"-25rem"}}>
                                <div className={'category-cover-right-top mt-3'}>
                                    <div className={'category-cover-right-icon text-center'}>
                                    <span>
                                          <img className={'salt-icon w-25'} src={require("../images/icons/lightbulb.png")}/>
                                    </span>
                                    </div>
                                    <div className="right-content-text">
                                        <h5><strong>Best time to travel</strong></h5>
                                        <span style={{fontSize:"1.6rem"}}>March to October is the best time to visit Egypt</span>
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
                                        <span style={{fontSize:"1.6rem"}}>Egypt’s currency is called the Egyptian Pound. 1 USD is equivalent to 16 Egyptian Pounds.</span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </header>
            <Container className="container-container" style={{marginTop:"-35rem"}}>
                <div className="container page-content-container">
                    <div className="page-content mt-5 d-flex justify-content-between container">
                        <div className="page-content__search">
                            <h3 className="search-title__heading">Pick a destination</h3>
                            <ul className="page-content__search-ul">
                                <li className="page-content__search-li mt-3 mb-1">
                                    <img className="page-content__search-icon" src={require("../images/egypt/search.jpg")} alt="icon images"/>
                                    <a href="src/components/Asia#"><span className="page-content__search-link">ALEXANDRIA</span></a>
                                </li>
                                <li className="page-content__search-li mt-3  mb-1">
                                    <img className="page-content__search-icon" src={require("../images/egypt/search2.jpg")} alt="icon images"/>
                                    <Link to={'/page/5'}><span className="page-content__search-link">CAIRO</span></Link>
                                </li>
                                <li className="page-content__search-li mt-3  mb-1">
                                    <img className="page-content__search-icon" src={require("../images/egypt/cover.jpg")} alt="icon images"/>
                                    <Link to={'/page/6'}><span className="page-content__search-link">LUXOR</span></Link>
                                </li>
                                <li className="page-content__search-li mt-3  mb-1">
                                    <img className="page-content__search-icon" src={require("../images/egypt/mustdo.jpg")} alt="icon images"/>
                                    <a href="src/components/Asia#"><span className="page-content__search-link">PALOMINO</span></a>
                                </li>
                                <li className="page-content__search-li mt-3  mb-1">
                                    <img className="page-content__search-icon" src={require("../images/egypt/mustdo2.jpg")} alt="icon images"/>
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
                        <div className="page-content-article" >
                            <div className="article-img img-img" style={{width: "68rem"}}>
                                {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                                <img className="article-img__img" src={require("../images/egypt/article.jpg")} alt="article picture" style={{marginTop: "40rem", width:"82rem"}}/>
                            </div>
                            <div className="div">
                             <span>
                                 <img style={{width: "8rem"}} className={'salt-icon'} src={require("../images/icons/lightbulb.png")}/>
                             </span>
                                <div className="article-heading">
                                    <h1 className="text-center container w-75" style={{fontSize:"3rem"}}>Egypt travel guide: A complete 3-week itinerary</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Container>
            {/*page content intro article*/}
            <Container>
                <div className="must-do row section container" style={{marginTop:"10rem"}}>
                    <h1 style={{fontWeight:"bolder", fontSize:"3rem"}} className="mb-3">MUST DO IN EGYPT</h1>
                    <div className="d-flex justify-content-between">
                        <div className="must-do__img-container">
                            <img className="must-do__img" src={require("../images/egypt/mustdo2.jpg")} alt="title"/>
                            <div className="must-do__title">
                                <div>
                                    <span>11 things to do in Luxor,<br/>Egypt</span><br/>
                                    <span className="must-do__tag">Egypt</span>
                                </div>
                            </div>
                        </div>
                        <div className="must-do__img-container">
                            <img className="must-do__img text-white" src={require("../images/egypt/mustdo.jpg")} />
                            <div className="must-do__title">
                                <span>11 things to do in Cairo, <br/>Egypt</span><br/>
                                <span className="must-do__tag">Egypt</span>
                            </div>
                        </div>
                        <div className="must-do__img-container">
                            <img className="must-do__img" src={require("../images/egypt/cover.jpg")} />
                            <div className="must-do__title">
                                <span>Trekking in Egypt, on <br/>Complete guide</span><br/>
                                <span className="must-do__tag">Egypt</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container>
                <div className="section ending-content container">
                    <div className="ending-content__p">
                        <h3  style={{fontSize:"3rem", lineHeight:"2.5rem"}}>
                            Egypt
                        </h3 >
                        <p  style={{fontSize:"large", lineHeight:"3.5rem"}}>
                            Mighty Egypt: home to the first ancient wonder of the world, and history that has shaped and inspired humanity since the beginning of time. The beauty and majesty of the pyramids is the main drawcard. Here time stands completely still, as onlookers are stunned into silence. The silence doesn’t last for long though, as adventure is around every corner. Discover the mind-blowing wonders of tombs, temples, and gold, and the extraordinary hieroglyphic stories of mummies and pharaohs. Get ready for the bucket list experience of a lifetime!
                        </p>
                    </div>

                    <div className="ending-content__p">
                        <h3  style={{fontSize:"3rem", lineHeight:"2.5rem"}}>
                            Pyramids & More
                        </h3>
                        <p  style={{fontSize:"large", lineHeight:"3.5rem"}}>
                            The delights of Egypt don’t stop at the pyramids. Experience the unique blend of spectacular mosques and churches in Cairo, or follow the Nile south to explore the archeological wonders of Luxor. For example, the Valley of the Kings, or the colossal pillars of the fantastic Karnak Temple. To really make it the trip of the lifetime,  journey as far south as the Sudan border. Here remarkable temples are carved out of rock faces, close to the fun-loving multicolored Nubian villages.
                        </p>
                    </div>

                    <div className="ending-content__p">
                        <h3  style={{fontSize:"3rem", lineHeight:"2.5rem"}}>
                            Water Wonder
                        </h3>
                        <p  style={{fontSize:"large", lineHeight:"3.5rem"}}>
                            Egypt is not just for culture vultures and history buffs, it is also a relaxation paradise!  The red sea coastline is home to stunning white-sand beaches, fringed by crystal clear ocean and incredible coral reefs that make it a haven for snorkelers. The main oasis in Egypt, however, is the River Nile, the longest river on the planet. Life centers around the wonders of this mammoth river, providing much-needed hydration that allows greenery and wildlife to flourish. Without it, the entire country would be desert. Relax and refresh among the wonderful waters of Egypt, be it on a legendary Nile cruise, or swimming in the heavenly seas.
                        </p>
                    </div>

                </div>
            </Container>

        </>
    );
};

export default Egypt;