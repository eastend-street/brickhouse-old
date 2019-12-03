import React from "react";
import "./Team.scss";
import PersonSection from "./PersonSection";
import profilImage from "../../assets/images/profilImage.jpg";

const Team: React.FC = () => {
  return (
    <div className="team">
      <div className="team-title">
        <p className="team-text" >Meet Our Team</p> 
      </div>
      <div className="team-shape"></div>
        <PersonSection/>
        <div className="person-place-middle">
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
            <div className="person-img-field-middle">
                    <img className="person-img-middle" alt="profilpic" src={profilImage} height="170px"/>
                    <div>
                    <p className="img-text-middle">Matt Hoffar, Vancouver</p>
                    </div>
            </div>
        </div>
        <PersonSection/>
    </div>
  );
};

export default Team;
