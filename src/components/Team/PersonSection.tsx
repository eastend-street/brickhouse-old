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
                
            </div>
        </div>
        </>
    )
};


export default PersonSection;