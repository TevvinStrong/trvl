import React from 'react';

import Beach from '../../Images/Collage/BeachPexels-photo-1433052.jpeg';
import Island from '../../Images/Collage/IslandPexels-photo-931018.jpeg';
import SailAway from '../../Images/Collage/SailAwayPexels-photo-1122408.jpeg';
import VacationHome from '../../Images/Collage/VacationHomePexels-photo-1078983.jpeg';

import './Collage.css';

const Collage = () => {
    return (
        <>
            <div className="collage">
                <div className="collage-content">
                    <img src={VacationHome} alt=" Birds eye view of beach vacation home" />
                    <img src={Beach} alt="Beach shore line" />
                    <img src={Island} alt="Island Beach" />
                    <img src={SailAway} alt="Sail Boats sailing close to island" />
                </div>
            </div>
        </>
    );
};

export default Collage;