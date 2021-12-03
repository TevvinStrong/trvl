import React from 'react';

import MountainValley from '../../Images/Collage/MountainValleyPexels-photo-1853371.jpeg';
import Surfers from '../../Images/Collage/SurfersPexels-photo-4321827.jpeg';
import MountainRange from '../../Images/Collage/MountainValleyPexels-photo-1853371.jpeg';
import Island from '../../Images/Collage/IslandPexels-photo-931018.jpeg';

import './Collage.css';

const Collage = () => {
    return (
        <>
            <div className="collage">
                <div className="collage-content">
                    <img src={MountainValley} alt="Nountain Valley" />
                    <img src={Surfers} alt="Surfers Surfing in Hawaii" />
                    <img src={MountainRange} alt="Mountain Range" />
                    <img src={Island} alt="Island Beach" />
                </div>
            </div>
        </>
    );
};

export default Collage;