import React from "react";
import './category-style.css'
import {Card, CardGroup, Col, Container, Row} from "react-bootstrap";

function Asia(){
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
                                        <img className={'salt-icon w-25'} src={require('../images/lightbulb.png')}/>
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
                                        <img className={'salt-icon w-25'} src={require('../images/compass.png')}/>
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
            <Container fluid>
                <Row>
                    <Col md={2} style={{marginLeft: "9rem"}}>
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
                    <Col md={9}>
                        <div className={'article-block'}>
                            <div className={'article-block-container container'}>
                                <div className={'article-block-image ms-auto me-auto'}>
                                    <img className={"article-image text-center"}
                                         src={'https://static.saltinourhair.com/wp-content/uploads/2020/04/23120534/best-things-to-do-luang-prabang-laos-1267x1080.jpg'}/>
                                </div>
                                <div className={'article-block-icon'}>
                                    <img className={'article-icon'} src={require("../images/hand.png")}/>
                                </div>
                                <div className={'article-block-content text-center'}>
                                    <h1 className={'article-heading mt-5'}>11 Best Things To Do in Luang Prabang</h1>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row style={{marginTop: "15rem"}}>
                    <h1 style={{fontWeight: "800"}}>Must-do's in Asia</h1>
                </Row>
                <Row>
                    <CardGroup>
                        <Card className={'me-3 card'}>
                            <Card.Img className={'card-img'} variant="top" style={{height: '30rem'}}
                                      src="https://static.saltinourhair.com/wp-content/uploads/2018/10/23150452/central-east-java-route-guide-header-1035x810.jpg"/>
                            <Card.Body class={'card-img-overlay d-flex flex-column justify-content-end card-body'}>
                                <Card.Title className={'card-title'}>Java Travel Guide: Best Things to do (8-day
                                    Route)</Card.Title>
                                <Card.Text className={'card-text'}>
                                    Indonesia
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className={'me-3'}>
                            <Card.Img className={'card-img'} variant="top" style={{height: '30rem'}}
                                      src="https://static.saltinourhair.com/wp-content/uploads/2018/10/23150452/central-east-java-route-guide-header-1035x810.jpg"/>
                            <Card.Body class={'card-img-overlay d-flex flex-column justify-content-end card-body'}>
                                <Card.Title>Java Travel Guide: Best Things to do (8-day Route)</Card.Title>
                                <Card.Text>
                                    Indonesia
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className={'me-3'}>
                            <Card.Img className={'card-img'} variant="top" style={{height: '30rem'}}
                                      src="https://static.saltinourhair.com/wp-content/uploads/2018/10/23150452/central-east-java-route-guide-header-1035x810.jpg"/>
                            <Card.Body class={'card-img-overlay d-flex flex-column justify-content-end card-body'}>
                                <Card.Title>Java Travel Guide: Best Things to do (8-day Route)</Card.Title>
                                <Card.Text>
                                    Indonesia
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </Row>
            </Container>
            <Container>
                <Row style={{marginTop: "15rem"}} className={'desc'}>
                    <Col lg={9} className={'ms-auto me-auto'}>
                        <h1>Asia</h1>
                        <p>A continent of contrasts and diversity: home to 48 incredible countries, countless ancient
                            treasures, and stunning natural wonders. This extraordinary continent pushes boundaries,
                            aiming to be bigger and better than any other place in the world. Discover the highest
                            mountains, the biggest cities, the largest temples, the tallest buildings, and even the most
                            enormous flowers! Every corner of Asia is a joy to explore, made even better by colorful
                            countries, each unique in their character. Each one has one defining feature though- warm,
                            friendly, and fascinating locals.</p>
                        <h1>The Past Meets the Future</h1>
                        <p>Asia is continuously ahead of the curve, always in the future, growing and developing.
                            Because of this it’s at the forefront of technology worldwide and known globally for its
                            cities leading the way in infrastructure and inventive design. Yet somehow, there is also a
                            perfect contrast with the beautiful simplicity of the past. The epic history of the
                            continent shapes Asian culture and the community- reflected spectacularly in the resilience
                            and friendliness of the people, the preservation of beautiful ancient buildings, and
                            customs. However, it is Asian food that remains the most beloved and preserved thing of all.
                            Get ready to experience the mouthwatering flavors of Pho in Vietnam, the citrusy zing of
                            Thailand, and the unbelievable spiced curries in Sri Lanka. Delicious dishes still lovingly
                            crafted that are now popular the world over!</p>
                        <h1>The Power of Nature</h1>
                        <p>The peace and spirituality of Asia are beyond powerful. Feel it in the special energy of
                            locals taking part in time-honored rituals. See it in the enchanting paintings covering
                            golden temples, or in the harmony of nature as a bird sits on the back of an elephant.
                            Everywhere a new type of landscape, climate, or community, will be waiting to greet
                            travelers with open arms. Whether it’s on the silk road of Uzbekistan, under the dreamy
                            cherry blossoms in Japan or South Korea, or next to coconut trees on coral-fringed beaches
                            in the Philippines or Indonesia. Asia will give a new and exciting meaning to the words
                            ‘paradise’ and ‘adventure’.</p>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
export default Asia;