import { mount } from "@cypress/react18";
import Timeline from "./timeline";

describe("App.cy.tsx - test for Timeline", () => {
  
  it("Should render App.js file properly", () => {
    mount(<Timeline />);
  });

  it("Should display the correct date for the first timeline item", () => {
    mount(<Timeline />);
    cy.get(".max-w-2xl.mx-auto li:nth-child(1) time").should(
      "contain",
      "February 2022"
    );
  });

  it("Should display the correct title for the first timeline item", () => {
    mount(<Timeline />);
     cy.get('.max-w-2xl.mx-auto li:nth-child(1) h3').should('contain', 'Application UI code in Tailwind CSS');
  });

  it("Should display the correct date for the second timeline item", () => {
    mount(<Timeline />);
    cy.get(".max-w-2xl.mx-auto li:nth-child(2) time").should(
      "contain",
      "March 2022"
    );
  });

  it('Should have the correct text for the "Learn more" link of the first timeline item', () => {
    mount(<Timeline />);
    cy.get(".max-w-2xl.mx-auto li:nth-child(1) a").should(
      "contain",
      "Learn more"
    );
  });

  it('Should have a "Learn more" link for the first timeline item', () => {
    mount(<Timeline />);
    cy.get(".max-w-2xl.mx-auto li:nth-child(1) a").should("exist");
  });

  it("Should display the correct title for the third timeline item", () => {
    mount(<Timeline />);
     cy.get(".max-w-2xl.mx-auto li:nth-child(3) h3").should(
       "contain",
       "E-Commerce UI code in Tailwind CSS"
     );
  });

});