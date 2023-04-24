import * as React from "react";
import MyImage from "../Insights/Images/Demo-V3-Pic.jpg";
import { Card, CardDefaults } from "./schema";

function CardInsights(props: Card) {
  const updatedProps: Card = { ...CardDefaults, ...props };

  const seoSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    author: updatedProps.author,
    datePublished: updatedProps.date,
    description: updatedProps.excerpt,
    image: updatedProps.image,
    name: "Insights Card",
  };

  const mouseEnter = () => {
    console.log("Mouse In!!");
  };

  const mouseLeave = () => {
    console.log("Mouse Out!!");
  };

  const clickLink = () => {
    console.log("Link clicked");
  };

  return (
    <>
      <div className="insightCard">
        <div
          className="card"
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
        >
          {/* <div className="container"> */}
          <div className="cardText">
            <p>{updatedProps.date}</p>
            <h1 role="heading" aria-level={1}>
              {updatedProps.heading}
            </h1>
          </div>

          <div className="imgDiv">
            <div className="overlay">
              <div className="overlayText">
                <p>{updatedProps.excerpt}</p>
                <br />
                <a
                  href="#"
                  aria-label="Click"
                  onClick={clickLink}
                  className="clickDiv"
                  tabIndex={0}
                >
                  {updatedProps.link}
                </a>
              </div>
            </div>
            <div className="image">
              <img
                src="https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Home"
                aria-hidden="true"
                height="100%"
                width="100%"
              />
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
    </>
  );
}

export default CardInsights;
