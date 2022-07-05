import React from 'react';
import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.css';
import '../LuyenPages/Homepage/homepage.css'

const Home = () => {
    return (
        <div style={{ marginTop: 100 }} className = "homepage">
            {/* <!-- section 1 --> */}
            <div className={'container'} id={'section1'}>
                <div className={'row'} id={'home-img1'}>
                    <div className={'col-lg-6 col-md-6 col-sm-6 col-xs-12'}>
                        <img src="https://static.saltinourhair.com/build/images/home/saltinourhair-header-menton-default.jpg"
                            alt="homeimg" />
                    </div>

                    <div className={'col-lg-6 col-md-6 col-sm-6 col-xs-12'} id={'icon1'}>
                        <div>
                            <img src={'../LuyenPages/Homepage/Img/icons8-table-lamp-50.png'} />
                        </div>
                        <p>Hi, we’re Nick & Hannah from Salt in our Hair.
                            We create inspiring travel blogs about the world’s most beautiful places to make planning your
                            holiday a piece of cake!</p>
                        <p>Choose a
                            <select class="choose-destination">
                                <option value="default">destination here</option>
                                <option value="1">HN</option>
                                <option value="2">QN</option>
                                <option value="3">HA</option>
                            </select>
                            to start your journey.
                        </p>
                    </div>
                </div>
            </div>

            {/* <!-- section2 --> */}
            <div class="container" id="section2">
                <div class="row">
                    <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                        <div class="text-center featured-img-title">
                            <img src="/homepage/Img/icons8-table-lamp-50.png" alt="img1" />
                            <div>Italy</div>
                        </div>
                        <div class="text-center featured-img-title">
                            <h3>
                                16 Best Things to do in Umbria, Italy
                            </h3>
                        </div>
                        <div class="featured-img">
                            <img src="https://blog.green-acres.com/wp-content/uploads/2018/09/shutterstock_230413204.jpg"
                                alt="" />
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                        <div class="text-center featured-img-title">
                            <img src="/homepage/Img/icons8-table-lamp-50.png" alt="img1" />
                            <div>Italy</div>
                        </div>
                        <div class="text-center featured-img-title">
                            <h3>
                                16 Best Things to do in Umbria, Italy
                            </h3>
                        </div>
                        <div class="featured-img">
                            <img src="https://blog.green-acres.com/wp-content/uploads/2018/09/shutterstock_230413204.jpg"
                                alt="" />
                        </div>
                    </div>
                    <div class="col-lg-4 .col-md-4 .col-sm-6 .col-xs-12">
                        <div class="text-center featured-img-title">
                            <img src="/homepage/Img/icons8-table-lamp-50.png" alt="img1" />
                            <div>Italy</div>
                        </div>
                        <div class="text-center featured-img-title">
                            <h3>
                                16 Best Things to do in Umbria, Italy
                            </h3>
                        </div>
                        <div class="featured-img">
                            <img src="https://blog.green-acres.com/wp-content/uploads/2018/09/shutterstock_230413204.jpg"
                                alt="" />
                        </div>
                    </div>
                </div>

                {/* <!-- section redomendation --> */}
                <div class="container">
                    <ul class="where-to">
                        <li>
                            Where to next?
                        </li>

                        <li>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/7/79/Thap_Rua.jpg" alt="" />Costa Rica
                        </li>
                        <li>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/7/79/Thap_Rua.jpg" alt="" />Thailand
                        </li>
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
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/79/Thap_Rua.jpg" alt="" />
                                </div>
                                <div class="col-9">
                                    <p>13 Easy Tips to Reduce Plastic & Travel Plastic-Free</p>
                                </div>
                                <hr />
                            </div>
                            <div class="row banner-article">
                                <div class="col-3">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/79/Thap_Rua.jpg" alt="" />
                                </div>
                                <div class="col-9">
                                    <p>13 Easy Tips to Reduce Plastic & Travel Plastic-Free</p>
                                </div>
                                <hr />
                            </div>
                            <div class="row banner-article">
                                <div class="col-3">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/79/Thap_Rua.jpg" alt="" />
                                </div>
                                <div class="col-9">
                                    <p>13 Easy Tips to Reduce Plastic & Travel Plastic-Free</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* <!-- section4 --> */}
            <div class="container" id="section4">
                <div class="row" id='section4-reverse '>
                    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12 section4-card">
                        <div class="row feautured-article">
                            <div class="col-3">
                                <img src="https://static.saltinourhair.com/wp-content/uploads/2020/03/23121752/travel-guide-krabi-774x600.jpg"
                                    alt="" />
                            </div>
                            <div class="col-9">
                                13 Easy Tips to Reduce Plastic & Travel Plastic-Free
                            </div>
                        </div>
                        <div class="row feautured-article">
                            <div class="col-3">
                                <img src="https://static.saltinourhair.com/wp-content/uploads/2020/03/23121752/travel-guide-krabi-774x600.jpg"
                                    alt="" />
                            </div>
                            <div class="col-9">
                                13 Easy Tips to Reduce Plastic & Travel Plastic-Free
                            </div>
                        </div>
                        <div class="row feautured-article">
                            <div class="col-3">
                                <img src="https://static.saltinourhair.com/wp-content/uploads/2020/03/23121752/travel-guide-krabi-774x600.jpg"
                                    alt="" />
                            </div>
                            <div class="col-9">
                                13 Easy Tips to Reduce Plastic & Travel Plastic-Free
                            </div>
                        </div>
                        <div class="row feautured-article">
                            <div class="col-3">
                                <img src="https://static.saltinourhair.com/wp-content/uploads/2020/03/23121752/travel-guide-krabi-774x600.jpg"
                                    alt="" />
                            </div>
                            <div class="col-9">
                                13 Easy Tips to Reduce Plastic & Travel Plastic-Free
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12 section4-card">
                        <img src="https://static.saltinourhair.com/wp-content/uploads/2021/06/04100711/santorini-greece-things-to-do-travel-guide-600x600.jpg"
                            alt="" />
                        <div class="bottom-left">
                            <h2>
                                Santorini
                            </h2>
                            <h4>
                                Greece
                            </h4>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12 section4-card">
                        <img src="https://static.saltinourhair.com/wp-content/uploads/2021/06/04100711/santorini-greece-things-to-do-travel-guide-600x600.jpg"
                            alt="" />
                        <div class="bottom-left">
                            <h2>
                                Santorini
                            </h2>
                            <h4>
                                Greece
                            </h4>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12 section4-card">
                        <img src="https://static.saltinourhair.com/wp-content/uploads/2021/06/04100711/santorini-greece-things-to-do-travel-guide-600x600.jpg"
                            alt="" />
                        <div class="bottom-left">
                            <h2>
                                Santorini
                            </h2>
                            <h4>
                                Greece
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
                                <div>Hannah & Nick</div>
                                <p class="about-us-content">We're Hannah & Nick, two creatives that run a 'travel content
                                    creation' company named Salt in our Hair. We inspire people to travel via our travel guides,
                                    photography and videography.
                                </p>
                                <Link to={"/contact"}>More about us</Link><span> /</span>
                                <a href="#">Work with us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default Home;