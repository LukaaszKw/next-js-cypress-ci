import { mount } from "@cypress/react18";
import Timeline from "../timeline/timeline";

describe("App.cy.tsx - test for Timeline", () => {
  it("playground", () => {
    mount(<Timeline/>);
    cy.get("[data-cy-id='count']").click().click();
  });
});
