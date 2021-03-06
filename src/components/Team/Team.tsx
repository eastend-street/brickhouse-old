import React from "react";
import "./Team.scss";
import PersonSection from "./PersonSection";
import profilImage from "../../assets/images/dummy-person-image.jpg";

const Team: React.FC = () => {
  return (
    <div id="team" className="team">
      <div className="team-title">
        <p className="team-text">Meet Our Team</p>
      </div>
      <div className="team-shape"></div>
      <PersonSection
        name="Matt Hoffar"
        location="Vancouver"
        text="Mr. Hoffar has over 20 years experience in sports and the capital
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
       structure and regulatory compliance."
      />
      <div className="person-place-middle">
        <div className="person-text-middle">
          <p>
            Mr. Smyl has over 8 years of capital markets and entrepreneur
            experience with his focus on building and financing start-ups in the
            technology, cannabis, video game, esports, entertainment, heath
            care, and health & wellness industries of which he has helped raise
            over $30 million CAD. In that time, he has gained over 7 years of
            corporate director and management experience with both private and
            public companies. He is also the founder and CEO of Final Stage
            Entertainment Inc., a content production company with an academy
            nominated management team with over 100+ years of experience in
            media and entertainment. The company focuses on original content
            creation for the Millennial and Generation Z demographics. Prior to
            the capital markets he spent 2 years working at the Senate of Canada
            under the Honorable Senator Larry Campbell. Spencer is currently
            working to combine his business networks in the sports, esports,
            politics, and finance to support the strategic vision and mandate of
            Brickhouse Ventures.
          </p>
        </div>
        <div className="person-img-field-middle">
          <img
            className="person-img-middle"
            alt="profilpic"
            src={profilImage}
            height="170px"
          />
          <div>
            <p className="img-text-middle">
              Spencer Smyl,
              <hr />
              Vancouver
            </p>
          </div>
        </div>
      </div>
      <PersonSection
        name="Evan Kubes"
        location="Toronto"
        text="Mr. Kubes is the President and Co-founder of MKM Group – Canada’s first, and one of
        the world’s most influential, Law Firms and Management Agencies dedicated
        exclusively to esports and content creators. In April 2019, MKM merged with Rumble
        Gaming Inc. to expand its offering to include a fully integrated media platform with a
        robust distribution network across the realms of traditional and digital media. Evan now
        represents 200+ premier esports organizations, athletes, content creators, game
        developers, and ancillary entities; assisted multi-national brands authentically
        implement marketing campaigns; been consulted by major institutional banks on their
        prospective investments; and has developed a full-service law firm in a niche area that
        is drastically under severed by traditional legal mechanisms."
      />
    </div>
  );
};

export default Team;
