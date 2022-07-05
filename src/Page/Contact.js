import React from 'react';
import { Link } from 'react-router-dom';
import '../LuyenPages/Aboutus/about.css'
import Home from './Home';

const Contact = () => {
    return (
        <div style={{ marginTop: 100 }} className="about">
            {/* <!-- section1 --> */}
            <div id="section1" class="container">
                <div>
                    <h1>This is Salt in our Hair</h1>
                    <p>Hi! We're Hannah & Nick, two creatives from The Netherlands that run a 'travel content creation' company
                        named Salt in our Hair. From our passion for traveling, photography, and sharing experiences, Salt in
                        our Hair was born on Instagram. As of May 2016, we set ourselves the goal to capture the world in a way
                        so that people see more than only their nine to five job.</p>
                </div>
            </div>

            {/* <!-- section2 --> */}
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 .col-md-6 .col-sm-6 .col-xs-12 person text-center">
                        <div>
                            <img src="https://static.saltinourhair.com/build/images/about-us/nick.png" alt="" />
                        </div>
                        <h3>Who's Nick?</h3>
                        <p>
                            That guy with the big amount of curls, that's me: Hi, I'm Nick! I would describe myself as a photo
                            perfectionist. Keep on trying until it's done! Yeah, that can take some time, but hey, taking photos
                            is a thing we love both, so it's not a punishment to do. Since traveling, I found myself to be
                            interested in learning other languages.</p>
                    </div>

                    <div class="col-lg-6 .col-md-6 .col-sm-6 .col-xs-12 person text-center">
                        <div>
                            <img src="https://static.saltinourhair.com/build/images/about-us/hannah.png" alt="" />
                        </div>
                        <h3>Who's Hannah?</h3>
                        <p>
                            Hmmm... Let's see. I would probably describe myself as a girl who can't function when her stomach is
                            growling. That's why I'm always keeping one eye on the streets to find the perfect bakery (with
                            carrot cake). Next, I can't resist puppy cuteness, especially at the beach with sunset.</p>
                    </div>
                </div>
            </div>


            {/* <!-- section3 --> */}
            <div class="container" id="section3">
                <div class="section3-content">
                    <h3>But why Salt in our Hair?!
                    </h3>
                    <p>The name Salt in our Hair popped up when we drove back home from the beach at the North Sea in The
                        Netherlands with sticky salty hair (quite an exciting explanation isn't it? 😂)</p>
                </div>
                <div class="section3-content">
                    <h1>Most asked question?</h1>
                </div>
                <div class="section3-content">
                    <h3>How do you manage to travel the world? 🗺️</h3>
                    <p>We created Salt in our Hair on Instagram on our first big backpack trip (Nov 2015) and started posting
                        almost daily. At the end of this trip GoPro featured one of our photos.</p>
                    <p>
                        We went back to our corporate jobs (which we did love ❤️ by the way!) and started the blog (May 2016)
                        where we post weekly, kept on posting daily on Instagram and traveled after every 12 weeks of working at
                        our jobs. About 1 year later (May 2017) we were working about 80 hours a week each. 40 at our corporate
                        jobs and 40 on Salt in our Hair in the evenings and weekends. But Salt in our Hair was getting quite
                        some media attention which helped us grow faster and get a minimum but steady income out of it. Another
                        thing was that we made sure our photos got shared on Instagram by using popular hashtags. Two years
                        later (1 Nov 2017) we quit our corporate jobs and are working full-time on Salt in our Hair. Which is
                        now our full-time, hard-working, dream job.
                    </p>
                </div>
                <div class="section3-content">
                    <h3>How did you build and market your blog? 🔨</h3>
                    <p>In the Netherlands, we graduated school, in the creative industry as a graphic designer and web
                        developer. Nick has 7 years of web development experience and Hannah about 3 years in Graphic Design. We
                        had the skills, so it was an obvious decision to start a travel blog. We launched our travel blog in May
                        2016.</p>
                    <p>
                        It took us a year to really get it out there, which was pretty frustrating sometimes. Nick writes most
                        of the blogs and Hannah makes sure all the visuals are on point.
                        To market, we collaborate with bigger blogs or travel related websites to make sure people get to know
                        our name. This, together with Pinterest helps us to get some good traffic to our blog.
                    </p>
                </div>
                <div class="section3-content">
                    <h3>What Gear & Software do you use? 🎥</h3>
                    <p>Please remember that gear isn't the key to making good content. Creativity, dedication, and trust are. We are now able to buy better gear but that didn’t gave us our first successes at all! Here’s what we used over the years.</p>
                </div>
                <div class="section3-content">
                    <h5>Now</h5>
                    <p>Take a look inside our bag: <Link to={"/"}>Travel Photography Camera</Link></p>
                </div>
            </div>

        </div>
    );
};

export default Contact;