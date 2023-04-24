import CardInsights from "@/Components/Card/Templates/Insights";
//Using this plugin for invoking CSS effects in cypress
import "cypress-real-events/support";

describe("InsightCard.cy.tsx", () => {
  it("renders", () => {
    cy.mount(<CardInsights />);
  });

  it("hovers on the card", () => {
    cy.mount(<CardInsights />);
    //getting the div with the specific classname according to CSS
    cy.get(".card").realHover(); //hovering on a specific card div
  });

  it("get the overlay div", () => {
    cy.mount(<CardInsights />);
    cy.get(".card").realHover();
    //getting the div having 'overlay' classname on hover
    cy.get(".overlay");
  });
});
