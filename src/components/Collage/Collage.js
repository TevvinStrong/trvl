/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';

import Boat from '../../Images/Collage/BoatPexels-photo-3876404.jpeg';
import Desert from '../../Images/Collage/DesertPexels-photo-4869960.jpeg';
import SailAway from '../../Images/Collage/SailAwayPexels-photo-1122408.jpeg';
import SoccerField from '../../Images/Collage/SoccerFieldPexels-photo-2641705.jpeg';
import Waterfall from '../../Images/Collage/WaterfallPexels-photo-4227875.jpeg';

import './Collage.css';

const Collage = () => {
    return (
        <>
            <div className="collage">
                <div className="collage-content">
                <h1>Check out these destinations</h1>
                    <div className="collage-content-grid">
                        <img className='row1' src={Waterfall} alt="Photo of a person stading in front of a waterfall" />
                        <img className='row1' src={Boat} alt="Aerial photo of a boat in the ocean" />
                        <br /> {/* Cheap fix for 2/3 grid layout */}
                        <img className='row2' src={SailAway} alt="Sail Boats sailing close to island" />
                        <img className='row2' src={SoccerField} alt="Aerial photo of a soccer field" />
                        <img className='row2' src={Desert} alt="Photo of a camalback exchurange" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Collage;