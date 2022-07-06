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
               <span>Destinations</span>
            </HeadlessTippy>

        </div>
    );
};

export default Destinations;