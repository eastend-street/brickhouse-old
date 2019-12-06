import React from "react";
import AdvisorCardList from "./AdvisorCardList";
const Advisor: React.FC = () => {
    return (
        <>
        <div className="site">
            <div className="title-wrapper">
                <p className="title-text-1">
                    Network That Works,
                </p>
                <p className="title-text-2">
                    For you
                </p>

            </div>
            
            <AdvisorCardList/>
        </div>
        </>
    );
}

export default Advisor;