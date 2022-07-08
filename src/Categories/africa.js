import React, {useRef} from 'react';
import './styles.css';
import {Link} from "react-router-dom";
import {Col, Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";

const Africa = () => {
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
                                        <div className={'category-cover-title'} style={{fontSize: "15rem"}} title={'AFRICA'}>
                                            AFRICA
                                        </div>
                                    </h1>
                                    <p style={{fontSize:"1.6rem", fontWeight:"light"}} className={'category-cover-excerpt'}>
                                        From the exotic wildlife and sand dunes, to the rich history & picturesque cities of Morocco.
                                    </p>
                                </div>
                            </h1>
                        </Col>
                        <Col className={'page-cover-image me-5'}  style={{marginLeft: "5rem"}} >
                            <img className={'page-cover_image'} src={require('../images/Africa/cover.jpg')}
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
                                        <span>March to October is the best time to visit Africa</span>
                                    </div>
                                </div>
                                <div className={'category-cover-right-top mt-3'}>
                                    <div className={'category-cover-right-icon text-center'}>
                                    <span>
                                         <img className={'salt-icon w-25'} src={require("../images/icons/ticket.png")}/>
                                    </span>
                                    </div>
                                    <div className="right-content-text">
                                        <h5><strong>Africa</strong></h5>
                                        <span>has a total of 54 countries with around 2,000 different spoken languages!</span>
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
                                    <img className="page-content__search-icon" src={require("../images/Africa/cover.jpg")} alt="icon images"/>
                                    <Link to={'/categories/egypt'}><span className="page-content__search-link">EGYPT</span></Link>
                                </li>
                                <li className="page-content__search-li mt-3  mb-1">
                                    <img className="page-content__search-icon" src={require("../images/Africa/mustdo3.jpg")} alt="icon images"/>
                                    <a href="src/components/Asia#"><span className="page-content__search-link">MAURITIUS</span></a>
                                </li>
                                <li className="page-content__search-li mt-3  mb-1">
                                    <img className="page-content__search-icon" src={require("../images/Africa/search1.jpg")} alt="icon images"/>
                                    <a href="src/components/Asia#"><span className="page-content__search-link">MOROCCO</span></a>
                                </li>
                                <li className="page-content__search-li mt-3  mb-1">
                                    <img className="page-content__search-icon" src={require("../images/Africa/search2.jpg")} alt="icon images"/>
                                    <a href="src/components/Asia#"><span className="page-content__search-link">SOUTH AFRICA</span></a>
                                </li>
                                <li className="page-content__search-li mt-3  mb-1">
                                    <img className="page-content__search-icon" src={require("../images/Africa/mustdo2.jpg")} alt="icon images"/>
                                    <a href="src/components/Asia#"><span className="page-content__search-link">KENYA</span></a>
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
                                <img className="article-img__img" src={require("../images/Africa/article.jpg")} alt="article picture" style={{width: "80rem", marginTop:"30rem"}}/>
                            </div>
                            <div className="div">
                             <span>
                                 <img style={{width: "8rem"}} className={'salt-icon'} src={require("../images/icons/lightbulb.png")}/>
                             </span>
                                <div className="article-heading text-center">
                                    <h1 className=" container w-75" style={{fontSize:"3rem"}}>Egypt Travel Guide Best Places To Visit</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Container>
            {/*page content intro article*/}
            <Container>
                <div className="must-do section container" style={{marginTop:"10rem"}}>
                    <h1 style={{fontWeight:"bolder", fontSize:"3rem"}} className="mb-3">MUST DO IN AFRICA</h1>
                    <div className="d-flex row justify-content-between">
                        <div className="must-do__img-container">
                            <img className="must-do__img" src={require("../images/Africa/mustdo2.jpg")} alt="title"/>
                            <div className="must-do__title">
                                <div>
                                    <span>9 best things to do in Chefchaouen</span><br/>
                                    <span className="must-do__tag">Morocco</span>
                                </div>
                            </div>
                        </div>
                        <div className="must-do__img-container">
                            <img className="must-do__img text-white" src={require("../images/Africa/mustdo1.jpg")} />
                            <div className="must-do__title">
                                <span>Visit the colorful Nubian Villages</span><br/>
                                <span className="must-do__tag">Egypt</span>
                            </div>
                        </div>
                        <div className="must-do__img-container">
                            <img className="must-do__img" src={require("../images/Africa/mustdo3.jpg")} />
                            <div className="must-do__title">
                                <span>Let's visit the Merzouga Desert</span><br/>
                                <span className="must-do__tag">Morocco</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container>
                <div className="section ending-content container">
                    <div className="ending-content__p">
                        <h3  style={{fontSize:"3rem", lineHeight:"2.5rem"}}>
                           Africa
                        </h3 >
                        <p  style={{fontSize:"large", lineHeight:"3.5rem"}}>
                            Africa dances to the beat of its own drum. Music and rhythm are integral to the people, who live to sing and dance. Nature also dances to this rhythm, in a continent that is teeming with wildlife, marching with the rise and fall of the seasons and the land. Africa is truly the best place on earth for seeing the greatest animals of all time. See Gorillas in the rainforests of Rwanda, the remarkable migration of the wildebeest, or the ‘big 5’ on a world-famous safari. Just the sight of seeing such incredible animals as elephants and cheetahs in the wild is enough to reduce even the hardiest of travelers to excitable tears. It is an unforgettable experience that will leave an imprint on your heart for a lifetime.
                        </p>
                    </div>

                    <div className="ending-content__p">
                        <h3  style={{fontSize:"3rem", lineHeight:"2.5rem"}}>
                            Legendary Landscapes and Wildlife
                        </h3>
                        <p  style={{fontSize:"large", lineHeight:"3.5rem"}}>
                            Africa is the continent that really does have it all. Home to the hottest deserts, the most epic mountains, the endless savannah, mammoth waterfalls, and paradise white-sand beaches. It is also home to fantastic cities from tip to toe. From the northern delights of Marrakech, filled with souks and treasures, to the southern gem of Cape Town, home to the legendary Table Mountain. Each country within Africa will bring travelers into another world, each one as extraordinary as the next. Reach new heights on Mount Kilimanjaro,  experience the road trip of a lifetime in Namibia, the delights of safari in the Masai Mara, the mind-blowing force of Victoria Falls, or wine tasting among the beautiful vineyards of South Africa.
                        </p>
                    </div>

                    <div className="ending-content__p">
                        <h3  style={{fontSize:"3rem", lineHeight:"2.5rem"}}>
                            Joyful People
                        </h3>
                        <p  style={{fontSize:"large", lineHeight:"3.5rem"}}>
                            Africa, the birthplace of mankind, is nothing short of addictive. Many places have stayed in the past, maintaining ancient traditions, languages, and spiritual bonds. Because of this, the fundamental principles of family, community, and nature have not been lost. As a result, people live life joyfully through colorful landscapes, vibrant patterns, soulful music, and beautiful smiles. Africa is truly an extraordinary continent that effortlessly steals hearts, and will continue to mesmerize travelers again and again.
                        </p>
                    </div>

                </div>
            </Container>

        </>
    );
};

export default Africa;