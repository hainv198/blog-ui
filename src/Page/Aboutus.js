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
                    <h1>This is Group 5</h1>
                    <p>
                        We're group 5 with 4 members, 3 play boyz and 1 lady that run a 'travel content creation' company named Salt in our Hair. We create inspiring travel blogs about the world’s most beautiful places to make planning your holiday a piece of cake! From our passion for traveling, photography, and sharing experiences, Salt in
                        our Hair was born on Instagram. As of May 2016, we set ourselves the goal to capture the world in a way
                        so that people see more than only their nine to five job.</p>
                </div>
            </div>

            {/* <!-- section2 --> */}
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 .col-md-6 .col-sm-6 .col-xs-12 person text-center">
                        <div>
                            <img src="https://scontent.fhan3-2.fna.fbcdn.net/v/t39.30808-6/283507433_5391759140836934_1498239091595490901_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ppttuV-O-BYAX-IHiHX&_nc_ht=scontent.fhan3-2.fna&oh=00_AT_fFpDmHObkFN69iYdRYfwU_XUL6dzBrkkwdxN1QWjS2A&oe=62CBC956" alt="" />
                        </div>
                        <h3>Nguyen Van Ha Hai</h3>
                        <p>
                            That guy with the big amount of curls, that's me: Hi, I'm Hai! I would describe myself as a photo
                            perfectionist. Keep on trying until it's done! Yeah, that can take some time, but hey, taking photos
                            is a thing we love both, so it's not a punishment to do. Since traveling, I found myself to be
                            interested in learning other languages.</p>
                    </div>

                    <div class="col-lg-6 .col-md-6 .col-sm-6 .col-xs-12 person text-center">
                        <div>
                            <img src="https://static.saltinourhair.com/build/images/about-us/hannah.png" alt="img" id='ngan'/>
                        </div>
                        <h3>Ha Thi Ngan</h3>
                        <p>
                            Hmmm... Let's see. I would probably describe myself as a girl who can't function when her stomach is
                            growling. That's why I'm always keeping one eye on the streets to find the perfect bakery (with
                            carrot cake). Next, I can't resist puppy cuteness, especially at the beach with sunset.</p>
                    </div>

                    <div class="col-lg-6 .col-md-6 .col-sm-6 .col-xs-12 person text-center">
                        <div>
                            <img src="https://zpsocial-f46-org.zadn.vn/e5e0133a9e6d7033297c.jpg" alt="Van Hai" id='vanhai'/>
                        </div>
                        <h3>Nguyen Van Hai</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac...
                        </p>
                    </div>

                    <div class="col-lg-6 .col-md-6 .col-sm-6 .col-xs-12 person text-center">
                        <div>
                            <img src="https://www.rd.com/wp-content/uploads/2018/05/shutterstock_725437768.jpg?resize=700,466" alt="Luyen" id='luyen'/>
                        </div>
                        <h3>Dao Dinh Luyen</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac...
                        </p>
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
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </p>
                </div>
                <div class="section3-content">
                    <h3>How did you build and market your blog? 🔨</h3>
                    <p>
                        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                    </p>
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
                    <p>Take a look inside our bag: <Link to={"/"}>Travel Photography Camera</Link></p>
                </div>
            </div>

        </div>
    );
};

export default Contact;