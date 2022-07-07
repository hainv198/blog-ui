import React, {useEffect, useState} from "react";
import {Button, Card, CardGroup, Col, Container, Row, Table} from "react-bootstrap";
import "./post-style.css";
import {useParams} from "react-router";
import {Link} from "react-router-dom";
import Comment from "./components/comments/comment";
import loading from '../images/circles-menu-1.gif'


function TemplatePage() {
    const [post, setPost] = useState(null);
    const [randomArt1, setrandomArt1] = useState(null);
    const [randomArt2, setrandomArt2] = useState(null);
    const [randomArt3, setrandomArt3] = useState(null);
    let params = useParams()
    useEffect(() => {
        let url = "https://62b11da8196a9e98702f9eca.mockapi.io/blog/" + params.id;
        fetch(url)
            .then(response => response.json())
            .then(data => setPost(data))
    }, [])
    let ranNum1;
    let ranNum2;
    let ranNum3;
    let i = 0;
    useEffect(() => {
        ranNum1 = Math.floor(Math.random() * 4) + 1;
        let url = "https://62b11da8196a9e98702f9eca.mockapi.io/blog/" + ranNum1;
        fetch(url)
            .then(response => response.json())
            .then(data => setrandomArt1(data))
    }, [])
    useEffect(() => {
        ranNum2 = Math.floor(Math.random() * 4) + 5;
        let url = "https://62b11da8196a9e98702f9eca.mockapi.io/blog/" + ranNum2;
        fetch(url)
            .then(response => response.json())
            .then(data => setrandomArt2(data))
    }, [])
    useEffect(() => {
        ranNum3 = Math.floor(Math.random() * 4) + 9;
        let url = "https://62b11da8196a9e98702f9eca.mockapi.io/blog/" + ranNum3;
        fetch(url)
            .then(response => response.json())
            .then(data => setrandomArt3(data))
    }, [])

    return (
        <>
            {post != null ? (
                <Container fluid>
                    <Row>
                        <Col lg={7} style={{marginTop: "20rem"}}>
                            <div className={'header-content-container'}>
                                <ol className={'ms-auto me-auto w-50'}>
                                    <Link to={'/'}>
                                        <li className={'top-header-list top-header-list-text'}>Home</li>
                                    </Link>
                                    <li className={'top-header-list'}> ></li>
                                    <Link to={'/categories/' + post.sub_tag}>
                                        <li className={'top-header-list top-header-list-text'}>{post.sub_tag} </li>
                                    </Link>
                                    <li className={'top-header-list'}> ></li>
                                </ol>
                                <h1 style={{width: "60%"}} className={' ms-auto me-auto header-title'}>{post.title}</h1>
                                <p style={{width: "60%"}}
                                   className={' ms-auto me-auto header-content'}>{post.tag_header}</p>
                            </div>
                        </Col>
                        <Col lg={5}>
                            <div>
                                <img className={'image-main'} src={post.image}/>
                            </div>
                        </Col>
                    </Row>
                    <Container fluid className={'about-us'}>
                        <Row>
                            <Link to={"/about"} style={{textDecoration: "none"}}>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 about-us-left">
                                        <img src="https://static.saltinourhair.com/build/images/kofi-block-image.png"
                                             alt=""/>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <div className="row about-us-right">
                                            <div className="col-12">
                                                <h2>Hi, we're Nick & Hannah</h2>
                                                <p className="about-us-content">
                                                    We hope you're enjoying our free travel guides & tips! If so, please
                                                    consider supporting our work.
                                                </p>
                                                <Button variant={'dark'} size={'lg'}
                                                        className={'about-us-button rounded-pill'}>About
                                                    us <i className="bi bi-arrow-right"></i></Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </Row>
                    </Container>
                    <Row>
                        <Col lg={6} className={'me-auto ms-auto mt-5'}>
                            <Row>
                                <h1 className={'post-content-title'}>1. {post.sub_head.a1}</h1>
                                <p className={'post-content-article'}>{post.sub_content.a1}</p>
                                <img className={'post-content-img'} src={post.sub_image.a1}/>

                            </Row>
                            <Row>
                                <h1 className={'post-content-title'}>2. {post.sub_head.a2}</h1>
                                <p className={'post-content-article'}>{post.sub_content.a2}</p>
                                <img className={'post-content-img'} src={post.sub_image.a2}/>
                            </Row>
                            <Row>
                                <h1 className={'post-content-title'}>3. {post.sub_head.a3}</h1>
                                <p className={'post-content-article'}>{post.sub_content.a3}</p>
                                <img className={'post-content-img'} src={post.sub_image.a3}/>
                            </Row>
                            <Row>
                                <h1 className={'post-content-title'}>4. {post.sub_head.a4}</h1>
                                <p className={'post-content-article'}>{post.sub_content.a4}</p>
                                <img className={'post-content-img'} src={post.sub_image.a4}/>
                            </Row>
                            <Row>
                                <h1 className={'post-content-title'}>5. {post.sub_head.a5}</h1>
                                <p className={'post-content-article'}>{post.sub_content.a5}</p>
                                <img className={'post-content-img'} src={post.sub_image.a5}/>
                            </Row>
                            <Row>
                                <h1 className={'post-content-title'}>6. {post.sub_head.a6}</h1>
                                <p className={'post-content-article'}>{post.sub_content.a6}</p>
                                <img className={'post-content-img'} src={post.sub_image.a6}/>
                            </Row>
                            <Row>
                                <h1 className={'post-content-title'}>7. {post.sub_head.a7}</h1>
                                <p className={'post-content-article'}>{post.sub_content.a7}</p>
                                <img className={'post-content-img'} src={post.sub_image.a7}/>
                            </Row>
                            <Row>
                                <h1 className={'post-content-title'}>8. {post.sub_head.a8}</h1>
                                <p className={'post-content-article'}>{post.sub_content.a8}</p>
                                <img className={'post-content-img'} src={post.sub_image.a8}/>
                            </Row>
                            {post.sub_head.a9 != null ? (
                                <>
                                    <Row>
                                        <h1 className={'post-content-title'}>9. {post.sub_head.a9}</h1>
                                        <p className={'post-content-article'}>{post.sub_content.a9}</p>
                                        <img className={'post-content-img'} src={post.sub_image.a9}/>
                                    </Row>
                                    {post.sub_head.a11 != null ? (
                                        <>
                                            <Row>
                                                <h1 className={'post-content-title'}>10. {post.sub_head.a10}</h1>
                                                <p className={'post-content-article'}>{post.sub_content.a10}</p>
                                                <img className={'post-content-img'} src={post.sub_image.a10}/>
                                            </Row>
                                            <Row>
                                                <h1 className={'post-content-title'}>11. {post.sub_head.a11}</h1>
                                                <p className={'post-content-article'}>{post.sub_content.a11}</p>
                                                <img className={'post-content-img'} src={post.sub_image.a11}/>
                                            </Row>
                                            {post.sub_head.a13 != null ? (
                                                <>
                                                    <Row>
                                                        <h1 className={'post-content-title'}>12. {post.sub_head.a12}</h1>
                                                        <p className={'post-content-article'}>{post.sub_content.a12}</p>
                                                        <img className={'post-content-img'} src={post.sub_image.a12}/>
                                                    </Row>
                                                    <Row>
                                                        <h1 className={'post-content-title'}>13. {post.sub_head.a13}</h1>
                                                        <p className={'post-content-article'}>{post.sub_content.a13}</p>
                                                        <img className={'post-content-img'} src={post.sub_image.a13}/>
                                                    </Row>
                                                    {post.sub_head.a15 != null ? (
                                                        <>
                                                            <Row>
                                                                <h1 className={'post-content-title'}>14. {post.sub_head.a14}</h1>
                                                                <p className={'post-content-article'}>{post.sub_content.a14}</p>
                                                                <img className={'post-content-img'}
                                                                     src={post.sub_image.a14}/>
                                                            </Row>
                                                            <Row>
                                                                <h1 className={'post-content-title'}>15. {post.sub_head.a15}</h1>
                                                                <p className={'post-content-article'}>{post.sub_content.a15}</p>
                                                                <img className={'post-content-img'}
                                                                     src={post.sub_image.a15}/>
                                                            </Row>
                                                            {post.sub_head.a18 != null ? (
                                                                <>
                                                                    <Row>
                                                                        <h1 className={'post-content-title'}>16. {post.sub_head.a16}</h1>
                                                                        <p className={'post-content-article'}>{post.sub_content.a16}</p>
                                                                        <img className={'post-content-img'}
                                                                             src={post.sub_image.a16}/>
                                                                    </Row>
                                                                    <Row>
                                                                        <h1 className={'post-content-title'}>17. {post.sub_head.a17}</h1>
                                                                        <p className={'post-content-article'}>{post.sub_content.a17}</p>
                                                                        <img className={'post-content-img'}
                                                                             src={post.sub_image.a17}/>
                                                                    </Row>
                                                                    <Row>
                                                                        <h1 className={'post-content-title'}>18. {post.sub_head.a18}</h1>
                                                                        <p className={'post-content-article'}>{post.sub_content.a18}</p>
                                                                        <img className={'post-content-img'}
                                                                             src={post.sub_image.a18}/>
                                                                    </Row>
                                                                </>
                                                            ) : ("")}
                                                        </>
                                                    ) : ("")}
                                                </>
                                            ) : ("")}
                                        </>
                                    ) : ("")}
                                </>
                            ) : ("")}
                        </Col>
                        {randomArt1 != null && randomArt2 != null && randomArt3 != null ? (
                            <Col lg={3} className={'post-related'}>
                                <Row>
                                    <h3 className={'text-center'}>Read another article!</h3>
                                    <div className={'post-related-container d-flex flex-column'}>
                                        <Link to={'/page/' + randomArt1.id} class={'post-related-link'}>
                                            <div className="card post-related-card mb-3">
                                                <div className="row g-0">
                                                    <div className="col-md-4">
                                                        {/*<img*/}
                                                        {/*    src="https://static.saltinourhair.com/wp-content/uploads/2020/06/23114636/Tam-Coc-Ninh-Binh-vietnam-810x810.jpg"*/}
                                                        {/*    className="card-img img-fluid rounded-start" alt="..."/>*/}
                                                        <img src={randomArt1.image}
                                                             className={'card-img img-fluid rounded-start'}/>
                                                    </div>
                                                    <div className="col-md-8">
                                                        <div className="card-body">
                                                            {/*<p className="card-text"> Best Things To Do in Ninh Binh & Tam Coc*/}
                                                            {/*    (Vietnam)</p>*/}
                                                            <p className={'card-text'}>{randomArt1.title}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                        <Link to={'/page/' + randomArt2.id} class={'post-related-link'}>
                                            <div className="card post-related-card mb-3">
                                                <div className="row g-0">
                                                    <div className="col-md-4">
                                                        {/*<img*/}
                                                        {/*    src="https://static.saltinourhair.com/wp-content/uploads/2020/07/23113313/vietnam-travel-guide-741x810.jpg"*/}
                                                        {/*    className="img-fluid card-img rounded-start" alt="..."/>*/}
                                                        <img src={randomArt2.image}
                                                             className={'card-img img-fluid rounded-start'}/>
                                                    </div>
                                                    <div className="col-md-8">
                                                        <div className="card-body">
                                                            {/*<p className="card-text">Vietnam Travel Guide: A Complete 3-Week*/}
                                                            {/*    Itinerary</p>*/}
                                                            <p className={'card-text'}>{randomArt2.title}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                        <Link to={'/page/' + randomArt3.id} class={'post-related-link'}>
                                            <div className="card post-related-card mb-3">
                                                <div className="row g-0">
                                                    <div className="col-md-4">
                                                        {/*<img*/}
                                                        {/*    src="https://static.saltinourhair.com/wp-content/uploads/2016/09/23113533/mui-ne-white-sand-dunes-vietnam-892x810.jpg"*/}
                                                        {/*    className="img-fluid card-img rounded-start" alt="..."/>*/}
                                                        <img src={randomArt3.image}
                                                             className={'card-img img-fluid rounded-start'}/>
                                                    </div>
                                                    <div className="col-md-8">
                                                        <div className="card-body">
                                                            {/*<p className="card-text">8 Best Things To Do in Mui Ne, Vietnam</p>*/}
                                                            <p className={'card-text'}>{randomArt3.title}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </Row>
                                <Row>
                                    <h3 className={'text-center mt-3'}>Must see articles</h3>
                                    <div className={'post-related-container'}>
                                        <div className="card post-related-card mb-3">
                                            <div className="row g-0">
                                                <div className="col-md-4">
                                                    <img
                                                        src="https://static.saltinourhair.com/wp-content/uploads/2020/07/23113113/SA70650-679x600.jpg"
                                                        className="img-fluid card-img rounded-start" alt="..."/>
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="card-body">
                                                        <p className="card-text">Best Travel Insurances in 2022
                                                            (COVID-19
                                                            coverage)</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card post-related-card mb-3">
                                            <div className="row g-0">
                                                <div className="col-md-4">
                                                    <img
                                                        src="https://static.saltinourhair.com/wp-content/uploads/2020/04/23120953/best-places-travel-tbilisi-648x810.jpg"
                                                        className="img-fluid card-img rounded-start" alt="..."/>
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="card-body">
                                                        <p className="card-text"> Best Places to Travel in 2022</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Row>
                            </Col>
                        ) : ("")}
                    </Row>
                    <Row>
                        <Col className={'ms-auto me-auto mt-5'} lg={12}>
                            <Container>
                                <h1>Prepare for your trip</h1>

                                <div className={'prep-list-container d-flex'}>
                                    <Table className={'prep-list-table'}
                                           style={{maxWidth: "75%", marginTop: "2rem", columnCount: "2"}}>
                                        <tbody>
                                        <tr className={'prep-list-table-row'}>
                                            <td width={"5%"}>
                                                <img className={'prep-list-table-img'}
                                                     src={require("../images/bed.png")}
                                                     style={{width: "50%"}}/>
                                            </td>

                                            <td className={'prep-list-table-title'} width={'15%'}>
                                                <a className={'prep-list-table-link'} href={"https://www.booking.com/"}>
                                                    <h3>Find Hotels</h3>
                                                    <span className={'text-muted'}>via Booking.com</span>
                                                </a>
                                            </td>
                                            <td width={"5%"}>
                                                <img className={'prep-list-table-img'}
                                                     src={require("../images/insurance.png")} style={{width: "50%"}}/>
                                            </td>
                                            <td className={'prep-list-table-title'} width={'15%'}>
                                                <a className={'prep-list-table-link'} href={"https://heymondo.com/"}>
                                                    <h3>Get a Travel Insurance</h3>
                                                    <span className={'text-muted'}>via Heymondo</span>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr className={'prep-list-table-row'}>
                                            <td width={"5%"}>
                                                <img className={'prep-list-table-img'}
                                                     src={require("../images/car.png")}
                                                     style={{width: "50%"}}/>
                                            </td>
                                            <td className={'prep-list-table-title'} width={'15%'}>
                                                <a className={'prep-list-table-link'}
                                                   href={"https://www.sunnycars.com/"}>
                                                    <h3>Find a Rental Car</h3>
                                                    <span className={'text-muted'}>via Sunny Cars</span>
                                                </a>
                                            </td>
                                            <td width={"5%"}>
                                                <img className={'prep-list-table-img'}
                                                     src={require("../images/boot.png")} style={{width: "50%"}}/>
                                            </td>
                                            <td className={'prep-list-table-title'} width={'15%'}>
                                                <a className={'prep-list-table-link'} href={"https://www.viator.com/"}>
                                                    <h3>Book Tours & Attractions</h3>
                                                    <span className={'text-muted'}>via Viator</span>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr className={'prep-list-table-row'}>
                                            <td width={"5%"}>
                                                <img className={'prep-list-table-img'}
                                                     src={require("../images/plane.png")} style={{width: "50%"}}/>
                                            </td>
                                            <td className={'prep-list-table-title'} width={'15%'}>
                                                <a className={'prep-list-table-link'}
                                                   href={"https://www.skyscanner.com"}>
                                                    <h3>Find Cheap Flights</h3>
                                                    <span className={'text-muted'}>via Skyscanner</span>
                                                </a>
                                            </td>
                                            <td width={"5%"}>
                                                <img className={'prep-list-table-img'}
                                                     src={require("../images/ticket.png")} style={{width: "50%"}}/>
                                            </td>
                                            <td className={'prep-list-table-title'} width={'15%'}>
                                                <a className={'prep-list-table-link'} href={"https://12go.co"}>
                                                    <h3>Book a Bus/Train/Transfer</h3>
                                                    <span className={'text-muted'}>via 12Go</span>
                                                </a>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </Table>
                                </div>
                                <Col>
                                    <Row>
                                        <Container>
                                            <div className={'text-center col-md-8 mt-3'}>
                                                <Button variant={'danger'} className={'social-buttons rounded-pill'}>
                                                    <i className="bi bi-pinterest"></i>
                                                    <span> Pinterest</span>
                                                </Button>
                                                <Button className={'social-buttons rounded-pill'}>
                                                    <i className="bi bi-facebook"></i>
                                                    <span> Facebook</span>
                                                </Button>
                                                <Button variant={'success'} className={'social-buttons rounded-pill'}>
                                                    <i className="bi bi-whatsapp"></i>
                                                    <span> Whatsapp</span>
                                                </Button>
                                            </div>
                                        </Container>
                                    </Row>
                                </Col>
                            </Container>
                        </Col>
                    </Row>
                    <Container>
                        <Link to={'/categories/' + post.sub_tag} style={{color: "black", textDecoration: "none"}}>
                            <Row style={{
                                marginTop: "5rem",
                                backgroundColor: "#f5f5f5",
                                borderRadius: "5%",
                                maxHeight: "48rem",
                                overflow: "hidden"
                            }} className={'read-all'}>
                                <Col lg={6} style={{marginTop: "5rem"}}>
                                    <div className={'read-all-text d-flex flex-column'}>
                                        <span>Read all articles about</span><br/>
                                        <div className={'category-cover-title'} title={post.sub_tag}>
                                            {post.sub_tag}
                                        </div>
                                        <div>

                                            <span className={'arrow-icon'}><i
                                                className="read-all-arrow bi bi-arrow-right-circle-fill"></i></span>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <img className={'read-all-img'} src={post.image} style={{maxWidth: "80%"}}/>
                                </Col>
                            </Row>
                        </Link>
                    </Container>
                    <Container style={{marginBottom: "5rem"}}>
                        <Row style={{marginTop: "5rem"}}>
                            <h1 style={{fontWeight: "800"}}>Further reading</h1>
                        </Row>
                        <Row>
                            <CardGroup>
                                <Link className={'fr-link'} to={'/categories/asia'}>
                                    <Card className={'me-3 fr-card'}>
                                        <Card.Img className={'fr-card-img'} variant="top"
                                                  src="https://static.saltinourhair.com/wp-content/uploads/2020/05/23120157/saltinourhair-asia.jpg"/>
                                        <Card.Body
                                            class={'card-img-overlay d-flex flex-column justify-content-end card-body fr-card-body '}>
                                            <Card.Title className={'fr-card-title'}><span
                                                className={'fr-card-title-span'}>Travel in</span></Card.Title>
                                            <Card.Text className={'fr-card-text'} title={'Asia'}><span
                                                className={'fr-card-text-span'}>
                                                Asia
                                                </span>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Link>
                                <Link className={'fr-link'} to={'/categories/europe'}>
                                    <Card className={'me-3 fr-card'}>
                                        <Card.Img className={'fr-card-img'} variant="top"
                                                  src="https://static.saltinourhair.com/wp-content/uploads/2019/06/23134442/italy-travel-itinerary.jpg"/>
                                        <Card.Body
                                            class={'card-img-overlay d-flex flex-column justify-content-end card-body fr-card-body'}>
                                            <Card.Title className={'fr-card-title'}><span
                                                className={'fr-card-title-span'}>Travel in</span></Card.Title>
                                            <Card.Text className={'fr-card-text'} title={'Europe'}><span
                                                className={'fr-card-text-span'}>
                                                Europe
                                                </span>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Link>
                                <Link className={'fr-link'} to={'/categories/africa'}>
                                    <Card className={'me-3 fr-card'}>
                                        <Card.Img className={'fr-card-img'} variant="top"
                                                  src="https://static.saltinourhair.com/wp-content/uploads/2019/03/23140507/egypt-tourism-travel-header.jpg"/>
                                        <Card.Body
                                            class={'card-img-overlay d-flex flex-column justify-content-end card-body fr-card-body'}>
                                            <Card.Title className={'fr-card-title'}><span
                                                className={'fr-card-title-span'}>Travel in</span></Card.Title>
                                            <Card.Text className={'fr-card-text'} title={'Africa'}><span
                                                className={'fr-card-text-span'}>
                                                Africa
                                                </span>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </CardGroup>
                        </Row>
                    </Container>
                    <Container>
                        <Row>
                            <Col className={'col-lg-12 me-auto ms-auto'}>
                                <Comment data={params.id}/>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            ) : (
                <Container>
                    <Col md={12} className={'ms-auto me-auto'}>
                        <div
                            // className="spinner-border"
                             style={{marginTop: "50rem", marginBottom: "50rem", marginLeft: "auto", marginRight: "auto"}}
                             className={'text-center'}
                             role="status">
                            <img style={{marginLeft: "15rem"}} src={loading}/>
                        </div>
                    </Col>
                </Container>
            )}
        </>
    )
}

export default TemplatePage;
