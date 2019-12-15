import React from 'react';
import './Team.scss';
import profilImage from "../../assets/images/dummy-person-image.jpg";

type PersonSectionProps = {
    name: string;
    location: string;
    text: string;
}

const PersonSection: React.FC<PersonSectionProps> = (props) => {
    return(
        <>
        <div className="person-place">
            <div className="person-img-field">
                    <img className="person-img" alt="profilpic" src={profilImage} height="170px"/>
                    <div>
                        <p className="img-text">
                            {props.name},
                            <hr/>
                            {props.location}
                        </p>
                    </div>
            </div>
            <div className="person-text">
                <p>{props.text}</p>
            </div>
        </div>
        
        </>
    )
};


export default PersonSection;