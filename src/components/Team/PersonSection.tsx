import React from 'react';
import './Team.scss';
import profilImage from "../../assets/images/profilImage.jpg";

const PersonSection: React.FC = () => {
    return(
        <>
        <div className="person-place">
            <div className="person-img-field">
                    <img className="person-img" alt="profilpic" src={profilImage} height="170px"/>
                    <div>
                    <p className="img-text">Matt Hoffar, Vancouver</p>
                    </div>
            </div>
            <div className="person-text">
                <p>
                Mr. Hoffar has over 20 years experience in sports and the capital
                 markets. He worked 6 years in NBA for the team Vancouver Grizzlies,
                10 years as the founder and coach of a youth basketball program and
                15 years in trading, operations and marketing both at a brokerage firm
                as an equities trader focused on micro and small cap stocks, and as
                part of the founding team of an asset management firm focused on 
                 algorithmic trading technology in the futures, equities and forex markets.
                Matt oversaw the trade desk and was involved with operations,
                compliance and marketing. Currently as Managing Partner of a Venture
                Builder, he takes on varying leadership and advisory roles to technology
                start ups in areas such as business development, strategy, capital
                structure and regulatory compliance.
                </p>
            </div>
        </div>
        
        </>
    )
};


export default PersonSection;