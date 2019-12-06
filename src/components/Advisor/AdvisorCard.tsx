import React from "react";
import "./Advisor.scss";
import img from "../../assets/images/adivisor.svg";

type PersonSectionProps = {
    key: any;
    name: string;
    location: string;
}
const AdvisorCard: React.FC<PersonSectionProps> = (props) => {
    return (
        <div>
            <div className="advisor-card">
                <img className="advisor-img" src={img} alt="advisor-img"/>
                <div className="advisor-text">
                    <h2>{props.name}</h2>
                    <hr/>
                    <p>{props.location}</p>
                </div>
            </div>
        </div>
    );
}

export default AdvisorCard;