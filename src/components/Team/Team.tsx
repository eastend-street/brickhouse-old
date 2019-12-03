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
            <div className="person-img-field">
                    <img className="person-img" alt="profilpic" src={profilImage} height="170px"/>
                    <div>
                    <p className="img-text">Matt Hoffar, Vancouver</p>
                    </div>
            </div>
            <div className="person-text">
                
            </div>
        </div>
        <PersonSection/>
    </div>
  );
};

export default Team;
