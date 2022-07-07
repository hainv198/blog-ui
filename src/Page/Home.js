import React from 'react';
import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.css';
import '../LuyenPages/Homepage/homepage.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Destinations from '../Header/Destinations';

const Home = () => {
    const [country, setCountry] = useState(null);
    useEffect(() => {
        console.log('app useeffect!!');
        let url = "https://62b04a60b0a980a2ef4f849b.mockapi.io/Test";

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setCountry(data);
            });
        console.log("Countries =" + country);
    }, []);

    console.log("Countries =" + country);

    var country_list = [];
    if (country != null) {
        country_list = country.map((element) => (
            <li className='text-nowrap'>
                <Link to={"/categories/" + element.country}>
                    <img src={element.image} alt={"img"} />
                    {element.country}
                </Link>
            </li>
        ));
    }
    console.log(country_list);

    return (
        <div style={{ marginTop: 75 }} className="homepage">
            {/* <!-- section 1 --> */}
            <div className={'container'} id={'section1'}>
                <div className={'row'} id={'home-img1'}>
                    <div className={'col-lg-6 col-md-6 col-sm-6 col-xs-12'}>
                        <img src="https://static.saltinourhair.com/build/images/home/saltinourhair-header-menton-default.jpg"
                            alt="homeimg" />
                    </div>

                    <div className={'col-lg-6 col-md-6 col-sm-6 col-xs-12'} id={'icon1'}>
                        <div>
                            <img src={require("../images/hand.png")} alt="img" />
                        </div>
                        <p>Hi, we’re Nick & Hannah from Salt in our Hair.
                            We create inspiring travel blogs about the world’s most beautiful places to make planning your
                            holiday a piece of cake!</p>
                        <p id='destination-wrapper'>Choose a
                            <span id="destination"><Destinations/></span>
                            to start your journey.
                        </p>
                    </div>
                </div>
            </div>

            {/* <!-- section2 --> */}
            <div class="container" id="section2">
                <div class="row">
                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                        <div class="text-center featured-img-title">
                            <img src={require("../images/globe.png")} alt="img1" />
                            <div>Vietnam</div>
                        </div>
                        <div class="text-center featured-img-title">
                            <h3>
                                10 Awesome Things to Do on Phu Quoc Island
                            </h3>
                        </div>
                        <div class="featured-img">
                            <Link to={"/page/1"}>
                                <img src="https://static.saltinourhair.com/wp-content/uploads/2017/02/23115637/Phu-Quoc-Island-sunset.jpg"
                                    alt="img1" />
                            </Link>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                        <div class="text-center featured-img-title">
                            <img src={require("../images/boot.png")} alt="img1" />
                            <div>France</div>
                        </div>
                        <div class="text-center featured-img-title">
                            <h3>
                                9 Best Things To Do in Marseille
                            </h3>
                        </div>
                        <div class="featured-img">
                            <Link to={"/page/4"}>
                                <img src="https://static.saltinourhair.com/wp-content/uploads/2021/08/19093052/marseille-france30.jpg"
                                    alt="img" />
                            </Link>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                        <div class="text-center featured-img-title">
                            <img src={require("../images/plane.png")} alt="img1" />
                            <div>Egypt</div>
                        </div>
                        <div class="text-center featured-img-title">
                            <h3>
                                7 Best Things To Do in Cairo
                            </h3>
                        </div>
                        <div class="featured-img">
                            <Link to={"/page/5"}>
                                <img src="https://static.saltinourhair.com/wp-content/uploads/2019/03/23140923/cairo-pyramids-giza.jpg"
                                    alt="img" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* <!-- section redomendation --> */}
                <div class="container">
                    <ul class="where-to">
                        <li>
                            Where to Next?
                        </li>
                        {country_list}
                    </ul>
                </div>
            </div>


            {/* <!-- section3 --> */}
            <div class="container" id="section3">
                <div class="row banner">
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 banner-left">
                        <div>
                            <h3>Its easy to do better</h3>
                            <h1>Sustainable travel</h1>
                            <p>Sustainable travel means traveling slow, with different transport, packing eco-friendly, stay local
                                and much more!</p>
                            <button class="banner-btn">Travel tip</button>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 section3-right">
                        <div class="banner-right text-center">
                            <div class="row banner-article">
                                <div class="col-3">
                                    <Link to={"/#"}>
                                        <img src="https://static.saltinourhair.com/wp-content/uploads/2019/10/23130311/easy-tips-travel-plastic-free-800x582.jpg" alt="img" />
                                    </Link>
                                </div>
                                <div class="col-9">
                                    <Link to={"/#"}>
                                        <p>13 Easy Tips to Reduce Plastic & Travel Plastic-Free</p>
                                    </Link>
                                </div>
                                <hr />
                            </div>
                            <div class="row banner-article">
                                <div class="col-3">
                                    <Link to={"/#"}>
                                        <img src="https://static.saltinourhair.com/wp-content/uploads/2020/03/23121432/sustainable-travel-shop-local-741x600.jpg" alt="img" />
                                    </Link>
                                </div>
                                <div class="col-9">
                                    <Link to={"/#"}>
                                        <p>Sustainable Travel Tips – 10 Easy Tips for You to Use Now!</p>
                                    </Link>
                                </div>
                                <hr />
                            </div>
                            <div class="row banner-article">
                                <div class="col-3">
                                    <Link to={"/#"}>
                                        <img src="https://static.saltinourhair.com/wp-content/uploads/2021/02/23103719/vegetarian-food-delicious-776x600.jpg" alt="img" />
                                    </Link>
                                </div>
                                <div class="col-9">
                                    <Link to={"/#"}>
                                        <p>How to Become Vegetarian: 8 Super Simple Steps</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* <!-- section4 --> */}
            <div class="container" id="section4">
                <div class="row" id='section4-reverse'>
                    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12 section4-card">
                        <div class="row feautured-article">
                            <div class="col-3">
                                <Link to={"/page/2"}>
                                    <img src="https://static.saltinourhair.com/wp-content/uploads/2020/05/23115843/hanoi-guide-old-quarter.jpg"
                                        alt="img" />
                                </Link>
                            </div>
                            <div class="col-9">
                                <Link to={"/page/2"}>
                                    12 Things To Do in Hanoi, Vietnam
                                </Link>
                            </div>
                        </div>
                        <div class="row feautured-article">
                            <div class="col-3">
                                <Link to={"/page/3"}>
                                    <img src="https://static.saltinourhair.com/wp-content/uploads/2021/08/31085854/nice-france-17.jpg"
                                        alt="" />
                                </Link>
                            </div>
                            <div class="col-9">
                                <Link to={"/page/3"}>
                                    7 Best Things To Do in Nice (French Riviera)
                                </Link>
                            </div>
                        </div>
                        <div class="row feautured-article">
                            <div class="col-3">
                                <Link to={"/page/6"}>
                                    <img src="https://static.saltinourhair.com/wp-content/uploads/2020/05/23120019/best-things-to-do-luxor-egypt.jpg"
                                        alt="img" />
                                </Link>
                            </div>
                            <div class="col-9">
                                <Link to={"/page/6"}>
                                    7 Best Things To Do in Luxor, Egypt
                                </Link>
                            </div>
                        </div>
                        <div class="row feautured-article">
                            <div class="col-3">
                                <Link to={"/page/7"}>
                                    <img src="https://static.saltinourhair.com/wp-content/uploads/2019/05/23134901/things-to-do-istanbul-turkey.jpg"
                                        alt="img" />
                                </Link>
                            </div>
                            <div class="col-9">
                                <Link to={"/page/7"}>
                                    11 Best Things To Do in Istanbul, Turkey
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12 section4-card">
                        <Link to={"/page/8"}>
                            <img src="https://static.saltinourhair.com/wp-content/uploads/2021/06/04100711/santorini-greece-things-to-do-travel-guide-810x810.jpg"
                                alt="img" />
                        </Link>

                        <div class="bottom-left">
                            <h2>
                                Venice
                            </h2>
                            <h4>
                                Italy
                            </h4>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12 section4-card">
                        <Link to={"/page/9"}>
                            <img src="https://static.saltinourhair.com/wp-content/uploads/2022/04/15123404/bogota-colombia.jpg"
                                alt="img" />
                        </Link>
                        <div class="bottom-left">
                            <h2>
                                Bogota
                            </h2>
                            <h4>
                                Colombia
                            </h4>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12 section4-card">
                        <Link to={"/page/10"}>
                            <img src="https://static.saltinourhair.com/wp-content/uploads/2022/02/15210431/puerto-viejo-1.jpg"
                                alt="img" />
                        </Link>
                        <div class="bottom-left">
                            <h2>
                                Puerto Viejo
                            </h2>
                            <h4>
                                Costa Rica
                            </h4>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- section5 --> */}
            <div class="container" id="section5">
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 section5-left">
                        <img src="https://static.saltinourhair.com/build/images/home/about-us.jpg" alt="" />
                    </div>

                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12" id="test">
                        <div class="row about-us">
                            <div class="col-12">
                                <h1>About us</h1>
                                <div>Group 5</div>
                                <p class="about-us-content">We're group 5 with 4 members, 3 play boyz and 1 lady that run a 'travel content
                                    creation' company named Salt in our Hair. We inspire people to travel via our travel guides,
                                    photography and videography.
                                </p>
                                <Link to={"/about"} className="about-link">More about us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default Home;