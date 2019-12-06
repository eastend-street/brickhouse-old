import React from "react";
import "./Advisor.scss";

type PersonSectionProps = {
    key: any;
    name: string;
    location: string;
}
const AdvisorCard: React.FC<PersonSectionProps> = (props) => {
    return (
        <div>
            <div className="advisor-card">
                <div className="advisor-text">
                    <h2>{props.name}</h2>
                    <p>{props.location}</p>
                </div>
            </div>
        </div>
    );
}

export default AdvisorCard;