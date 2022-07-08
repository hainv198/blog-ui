import React from "react";
import 'about.css'
import { Button, Card, CardImg, Col, Container, Row } from "react-bootstrap";

function About() {
    return (
        <div>
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
                            <img src="https://static.saltinourhair.com/build/images/about-us/nick.png" alt=""/>
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
                            <img src="https://static.saltinourhair.com/build/images/about-us/hannah.png" alt="img"/>
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
                    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                    </p>
                </div>
                <div class="section3-content">
                    <h3>How did you build and market your blog? 🔨</h3>
                    <p>In the Netherlands, we graduated school, in the creative industry as a graphic designer and web
                        developer. Nick has 7 years of web development experience and Hannah about 3 years in Graphic Design. We
                        had the skills, so it was an obvious decision to start a travel blog. We launched our travel blog in May
                        2016.</p>
                    <p>
                    "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
                    </p>
                </div>
                <div class="section3-content">
                    <h3>What Gear & Software do you use? 🎥</h3>
                    <p>Please remember that gear isn't the key to making good content. Creativity, dedication, and trust are. We are now able to buy better gear but that didn’t gave us our first successes at all! Here’s what we used over the years.</p>
                </div>
                <div class="section3-content">
                    <h5>Now</h5>
                    <p>Take a look inside our bag: <a href="#">Travel Photography Camera</a></p>
                </div>
            </div>
        </div>
    );
}

export default About;
