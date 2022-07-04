import React from "react";
import './category-style.css'
import {Button, Card, CardImg, Col, Container, Row} from "react-bootstrap";

function App() {
    return (
        <>
            <header className={'header'}>
                <Row className={'mt-5 container-fluid  align-items-center'}>
                    <Col className={'mt-5 me-5 col-md-4'}>
                        <h1>
                            <div className={'category-cover-left'}>
                                <h1 className={'mt-5'}>
                                    <span className={'category-cover-subtitle'}>Travel in</span>
                                    <div className={'category-cover-title'} title={'Asia'}>
                                        Asia
                                    </div>
                                </h1>
                                <p style={{fontSize: ".4em"}} className={'category-cover-excerpt'}>
                                    Majestic Asia! An incredible continent that has something to offer for any kind of
                                    traveler.
                                </p>
                            </div>
                        </h1>
                    </Col>
                    <Col className={'page-cover-image me-5'}>
                        <img className={'page-cover_image'}
                             srcSet={'https://static.saltinourhair.com/wp-content/uploads/2020/05/23120157/saltinourhair-asia-768x768.jpg 768w, https://static.saltinourhair.com/wp-content/uploads/2020/05/23120157/saltinourhair-asia-1024x1024.jpg 1024w, https://static.saltinourhair.com/wp-content/uploads/2020/05/23120157/saltinourhair-asia-1080x1080.jpg 1350w, https://static.saltinourhair.com/wp-content/uploads/2020/05/23120157/saltinourhair-asia-1440x1440.jpg 1800w, https://static.saltinourhair.com/wp-content/uploads/2020/05/23120157/saltinourhair-asia.jpg'}
                             alt={'10 Best Beaches in Sri Lanka'} sizes={"auto"} width={1024} height={844}/>
                    </Col>
                    <Col className={'col-md-4'}>
                        <div className={'category-cover-right align-items-end'}>
                            <div className={'category-cover-right-top mt-3'}>
                                <div className={'category-cover-right-icon text-center'}>
                                    <span>
                                        <img className={'salt-icon w-25'} src={require('./images/lightbulb.png')}/>
                                    </span>
                                </div>
                                <div className={'category-cover-right-content'}>
                                    <div className={'category-cover-right-title text-center'}>
                                        Did you know?
                                    </div>
                                    <div className={'category-cover-right-text'}>
                                        <p>
                                            Out of all rice eaten in the world, 90% is consumed in Asia! And all
                                            Vietnamese people share the same birthday.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className={'category-cover-right-bottom mt-3'}>
                                <div className={'category-cover-right-icon text-center'}>
                                    <span>
                                        <img className={'salt-icon w-25'} src={require('./images/compass.png')}/>
                                    </span>
                                </div>
                                <div className={'category-cover-right-content'}>
                                    <div className={'category-cover-right-title text-center'}>
                                        Asia
                                    </div>
                                    <div className={'category-cover-right-text'}>
                                        <p>
                                            With 48 countries it is the world’s largest continent.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </header>
            <Container>
                <Row>
                    <Col>
                        <div className="page-content__search">
                            <h3 className="search-title__heading">Pick a destination</h3>
                            <ul className="page-content__search-ul">
                                <li className="page-content__search-li mt-3 mb-1">
                                    <img className="page-content__search-icon"
                                         src={"https://static.saltinourhair.com/wp-content/uploads/2020/05/23115725/bali-saltinourhair-163x163.jpg"}
                                         alt="icon images"/>
                                    <a href="#"><span className="page-content__search-link">Bali</span></a>
                                </li>
                                <li className="page-content__search-li mt-3  mb-1">
                                    <img className="page-content__search-icon"
                                         src={"https://static.saltinourhair.com/wp-content/uploads/2020/11/23105803/india-travel-blogs-163x163.jpg"}
                                         alt="icon images"/>
                                    <a href="#"><span className="page-content__search-link">India</span></a>
                                </li>
                                <li className="page-content__search-li mt-3  mb-1">
                                    <img className="page-content__search-icon"
                                         src={"https://static.saltinourhair.com/wp-content/uploads/2020/04/23120527/things-to-do-Luang-Prabang-Royal-Palace-130x163.jpg"}
                                         alt="icon images"/>
                                    <a href="#"><span className="page-content__search-link">Laos</span></a>
                                </li>
                                <li className="page-content__search-li mt-3  mb-1">
                                    <img className="page-content__search-icon"
                                         src={"https://static.saltinourhair.com/wp-content/uploads/2018/06/23152532/kandolhu-island-maldives-pool-villas-130x163.jpg"}
                                         alt="icon images"/>
                                    <a href="#"><span className="page-content__search-link">Maldives</span></a>
                                </li>
                                <li className="page-content__search-li mt-3  mb-1">
                                    <img className="page-content__search-icon"
                                         src={"https://static.saltinourhair.com/wp-content/uploads/2020/05/23120154/saltinourhair-singapore-163x163.jpg"}
                                         alt="icon images"/>
                                    <a href="#"><span className="page-content__search-link">Singapore</span></a>
                                </li>
                                <li className="page-content__search-li mt-3  mb-1">
                                    <img className="page-content__search-icon"
                                         src={"https://static.saltinourhair.com/wp-content/uploads/2020/02/23122934/ultimate-travel-guide-koh-lipe-island-163x109.jpg"}
                                         alt="icon images"/>
                                    <a href="#"><span className="page-content__search-link">Thailand</span></a>
                                </li>
                                <li className="page-content__search-li mt-3  mb-1">
                                    <img className="page-content__search-icon"
                                         src={"https://static.saltinourhair.com/wp-content/uploads/2020/03/23122125/lantern-festival-hoi-an-vietnam-163x114.jpg"}
                                         alt="icon images"/>
                                    <a href="#"><span className="page-content__search-link">Vietnam</span></a>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col>
                        <Card className={'mt-5'} >
                            <Card.Img className={"card-image"} src={'https://static.saltinourhair.com/wp-content/uploads/2020/04/23120534/best-things-to-do-luang-prabang-laos-1267x1080.jpg'} />
                            <Card.Body className={'text-center'}>
                                <Card.Title>
                                    <img className={'card-icon'} style={{width: "6rem"}} src={require("./images/hand.png")}/>
                                </Card.Title>
                                <Card.Text className={"card-text mt-4"}>
                                    11 best things to do in Luang Prabang
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default App;
