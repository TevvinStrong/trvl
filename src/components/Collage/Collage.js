/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react';

import Boat from '../../Images/Collage/BoatPexels-photo-3876404.jpeg';
import Desert from '../../Images/Collage/DesertPexels-photo-4869960.jpeg';
import SailAway from '../../Images/Collage/SailAwayPexels-photo-1122408.jpeg';
import SoccerField from '../../Images/Collage/SoccerFieldPexels-photo-2641705.jpeg';
import Waterfall from '../../Images/Collage/WaterfallPexels-photo-4227875.jpeg';

import './Collage.css';

const Collage = () => {
    const [destinations, setDestinations] = useState([
        {
            image: Waterfall,
            type: 'Adventure',
            text: 'Discover hidden waterfalls deep within the Amazon forest'
        },
        {
            image: Boat,
            type: 'Luxury',
            text: 'Travel through the islands of Bali in a private cruise'
        },
        {
            image: SailAway,
            type: 'Mystery',
            text: 'Set Sail in the Atlantic Ocean visiting Uncharted Waters'
        },
        {
            image: SoccerField,
            type: 'Adventure',
            text: 'Experience Football ontop of the Himilayan Mountains'
        },
        {
            image: Desert,
            type: 'Thrill',
            text: 'Ride through the Sahara Desert on a guided camel tour'
        },
    ]);

    window.console.log(setDestinations);
    return (
        <>
            <div className="collage">
                <div className="collage-content">
                <h1>Check out these destinations</h1>
                    <div className="collage-content-grid">
                        {destinations.map((destination) => {
                            return (
                                <>
                                    <img src={destination.image} alt="images of different vacation destinations" />
                                    <span>{destination.type}</span>
                                    <h5>{destination.text}</h5>
                                </>
                            )
                        })};
                    </div>
                </div>
            </div>
        </>
    );
};

export default Collage;