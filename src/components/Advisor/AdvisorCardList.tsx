import React from "react";
import AdvisorCard from "./AdvisorCard";
import {AdvisorList} from "./AdvisorList";
import "./Advisor.scss";

const AdvisorCardList: React.FC = () => {
    return(
        <div className="advisor-wrapper">
            {
            AdvisorList.map((user,i) => {
                return(
                    <AdvisorCard
                        key={i}
                        name={AdvisorList[i].name}
                        location={AdvisorList[i].location}
                    />
                );
            })
        }
        </div>

    );
}

export default AdvisorCardList