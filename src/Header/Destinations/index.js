import React, {useEffect, useState} from 'react';
import HeadlessTippy from "@tippyjs/react/headless";
import DestinationsHover from "./Popper/Destinations_Hover";
import Title from "./Title";
import './Destination.scss'

const Destinations = () => {
    const [destinations, setDestinations] = useState([])

    useEffect(() => {
        fetch('https://62c2b3c5876c4700f52b9823.mockapi.io/destination')
            .then((res) => res.json())
            .then((res) => {
                setDestinations(res)
            })
    },[destinations])

    return (
        <div>
            <HeadlessTippy
                placement='bottom'
                interactive
                render={attrs => (
                    <div className="box" tabIndex='-1' {...attrs}>

                        <DestinationsHover>
                            {destinations.map((item) => (
                                <>
                                <Title data={item} key={item.id}/>
                                </>
                                ))}
                        </DestinationsHover>

                    </div>
                )}
                // onClickOutside={handleHideResult}
            >
               <span style={{cursor:"pointer"}}>Destinations</span>
            </HeadlessTippy>

        </div>
    );
};

export default Destinations;

export const demo =
    [
        {
            "title": "10 Awesome Things to Do on Phu Quoc Island, Vietnam",
            "tags": [
                "Asia"
            ],
            "sub_tag": [
                "Bali",
                "Cambodia",
                "Georgia",
                "India",
                "Indonesia",
                "Laos",
                "Malaysia",
                "Maldives",
                "Myanmar",
                "Philippines",
                "Singapore",
                "Sri Lanka",
                "Thailand",
                "Uzbekistan",
                "Vietnam"
            ],
            "tag_header": [

                "Phu Quoc: an ‘emerald island’ of white powder beaches, turquoise waters, palm tree forests, mountains, and waterfalls. This Vietnamese island is located close to the coast of Cambodia in the Gulf of Thailand, and half of the island is a stunning national park. Aside from its incredible nature, and paradise beaches, it is also home to bustling markets, and unique food products. Hop on a motorbike and get ready for an adventure, with all the top things to do in Phu Quoc."
            ],
            "sub_head": {
                "a1": "Enjoy Sao Beach (Star Beach) in Phu Quoc",
                "a2": "Explore Phu Quoc by Motorbike",
                "a3": "Visit Suoi Tranh Waterfall",
                "a4": "Ham Ninh Fishing Village",
                "a5": "Phu Quoc Cable Car",
                "a6": "Visit the Night Market",
                "a7": "Hang out at Rory’s Beach Club",
                "a8": "The Fish Sauce Factory or Pepper Farms",
                "a9": "Phu Quoc at Sunset",
                "a10": "Island Hop on a Boat Tour",
                "a11": "Best Time to Visit Phu Quoc"
            },
            "sub_content": {
                "a1": "Experience the powdery white sand, and clear, turquoise waters of Sao Beach! This is no doubt one of the best beaches on Phu Quoc, if not in the whole of Vietnam. The clear water makes it a perfect spot for snorkeling, as well as its stunning corals and many starfish. Out of the water, travelers can enjoy wandering along the sandy beach, exploring the palm tree forests and dense jungle that borders the bay. Enjoy a perfect lazy day here in absolute paradise! If you can, visit early in the morning when there are fewer tourists for a remote, desert island experience. Alternatively, visit in the evening to enjoy a romantic seafood dinner on the beach! When to visit? The summer months are the best time to visit for calm waters that are perfect for snorkeling. From October- April, the winds pick up, creating great waves for kitesurfing! Tip: Sao beach is a 45-minute motorbike ride from Duong Dong (town), so make sure to take an extra water bottle.",
                "a2": "Exploring the island by motorbike is one of the top things to do in Phu Quoc! Not only is it the most beautiful way to see the island, but it’s also the easiest way. Hop from beach to beach, viewpoint to viewpoint, with the wind in your hair, and a feeling of island freedom. Although there are a lot of undeveloped roads you still can get around by using Google Maps. Most hotels will offer a motorbike rental service, which makes it nice and easy to jump straight out of bed and onto the road. Alternatively, it’s possible to rent a motorbike from a dedicated motorbike rental shop in town. An automatic motorbike should cost from $6 – $12 a day.",
                "a3": "Close to the Ham Ninh Mountains, within the forest, lies this beautiful waterfall. The waterfall may be small, but it’s surrounded by wonderful nature and it’s a lovely place to cool off and swim. To reach the waterfall, head to the center of Phu Quoc island, near the airport. From here it’s a small hike of around 20 minutes to get to the top of the waterfall. During the hike, you’ll pass through luscious greenery, flowers, and streams. For the best experience visit during the rainy season, to ensure there is enough water, and ideally as early as possible in the morning, before the crowds arrive. If you can, try to combine the waterfalls with Sao Beach to save time and energy. Also visit: Head to Duong Dong lake, the island’s largest lake. The lake has many streams flowing off of it that give way to other waterfalls, such as Suoi Da Dau and Suoi Da Ngon.",
                "a4": "Located near to the Suoi Tranh waterfall is the charming fishing village of Ham Ninh. One of the oldest fishing villages in Vietnam. Enjoy watching this ancient way of living, taking a moment to appreciate the lifestyle of the locals that have lived and worked here for generations. Make sure to enjoy some freshly caught seafood- especially crab, which is the specialty here!",
                "a5": "Fly through the sky on the island’s very own cable car! This 15-minute journey takes you high over the turquoise, emerald ocean, a few small islands, and the bright dense greenery that covers Phu Quoc. The end destination is Pineapple Island (Hon Thom), where there is a nature reserve, and a beautiful beach. The return journey is part of the original price.",
                "a6": "The Duong Dong night market in Phu Quoc is the place to be when the sun has set. For dinner, choose from a selection of local foods at the market, including freshly caught seafood. Don’t forget to get a chop-chop ice cream afterward, and enjoy wandering through the many stalls, soaking up the lively atmosphere. It’s not the cheapest place to get dinner on Phu Quoc but it’s definitely worth it! Tip: Close to the night market, is the colorful temple Cao Dai. Check this beautiful temple out during the day, to see all the marble, colors, and carvings lit up by the sun. There are also beautiful views out onto the ocean.",
                "a7": "Rory’s beach club is one of the most popular beach clubs on Phu Quoc. Grab a cocktail, mocktail, or beer, and chill for a while here, taking in the relaxed beach vibe. It’s located north of Cay Sao beach, on the east of the island. A fun thing to do while in Phu Quoc!",
                "a8": "Phu Quoc is famous for its pepper and fish sauce production! Fish sauce (a commonly used ingredient in many Vietnamese dishes) is their number one export product and a huge source of income for the island. Check out Nuoc Mam Hung Thanh, a fish sauce distillery which is located near the market. Here you can see how fish sauce is made, which is a unique thing to do while in Phu Quoc. Additionally, make a visit to a pepper farm, where you can learn how it is grown and produced. This is a lovely way to get out into the countryside of Phu Quoc, and some of the farms offer accommodation, or even the opportunity to volunteer!",
                "a9": "Look to the west for a spectacular sunset! Sit down on a beautiful stretch of white sand, anywhere along the west coast and get ready for one of the best sunsets in Vietnam. This is a truly memorable experience and a wonderful thing to do in Phu Quoc.",
                "a10": "Plenty of island trips are offered in order to explore the coast of Phu Quoc and its surrounding islands. Tours normally include lunch and fruit, as well as the option to snorkel at various paradise islands. Explore the crystal clear waters of Turtle Island in the North or one of the many southern islands, such as fingernail island, or May Rut island. You may even have enough luck to see a green or hawksbill turtle!",
                "a11": "Phu Quoc has wet and dry seasons. From November till March, dry season temperatures will go from 25–28°C. This is the best time to visit Phu Quoc. Hotels can get full quickly so try to plan ahead. From April to June and during October, conditions are good but temperatures can reach 35°C in April/May when humidity is high. If you like your holidays very quiet, and don’t mind the heavy rain, then monsoon from July to September is a perfect time to come to avoid the crowds."
            },
            "sub_image": {
                "a1": "https://static.saltinourhair.com/wp-content/uploads/2017/02/23115640/Phu-Quoc-beach-Vietnam.jpg",
                "a2": "https://static.saltinourhair.com/wp-content/uploads/2019/02/23141055/things-to-do-siargao-philippines-motorbike.jpg",
                "a3": "https://static.saltinourhair.com/wp-content/uploads/2017/02/23113239/waterfall-phu-quoc.jpg",
                "a4": "https://static.saltinourhair.com/wp-content/uploads/2017/02/23115633/Phu-Quoc-Island-Vietnam.jpg",
                "a5": "",
                "a6": "https://static.saltinourhair.com/wp-content/uploads/2017/02/23115623/Phu-Quoc-night-market.jpg",
                "a7": "https://static.saltinourhair.com/wp-content/uploads/2017/02/23113243/sunset-swing.jpg",
                "a8": "",
                "a9": "https://static.saltinourhair.com/wp-content/uploads/2017/02/23115637/Phu-Quoc-Island-sunset.jpg",
                "a10": "",
                "a11": "https://static.saltinourhair.com/wp-content/uploads/2017/02/23115627/Things-to-do-Phu-Quoc-Island-Vietnam.jpg"
            },
            "image": "https://static.saltinourhair.com/wp-content/uploads/2017/02/23115637/Phu-Quoc-Island-sunset.jpg",
            "id": "1"
        },
    ]
