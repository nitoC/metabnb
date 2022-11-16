import React from 'react';
import metamask from '../assets/metamask.svg'
import opensea from '../assets/opensea.svg'
import mbtoken from '../assets/mbtoken.svg'
function Sponsors() {
    return ( 
        <div className="sponsors">
            <div className="sponsors__wrapper">
                <div className="sponsor">
                    <img src={mbtoken} alt="" className="sponsor__img" />
                </div>
                <div className="sponsor">
                    <img src={metamask} alt="" className="sponsor__img" />
                </div>
                <div className="sponsor">
                    <img src={opensea} alt="" className="sponsor__img" />
                </div>
            </div>
        </div>
     );
}

export default Sponsors;