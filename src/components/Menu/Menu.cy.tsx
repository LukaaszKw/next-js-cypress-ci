import { mount } from '@cypress/react18';
import Menu from './Menu';

describe('Menu component tests', () => {
  it('Shoud be mounted', () => {
    mount(<Menu />);
  });

  it('Shoud contain Close panel text button', () => {
    mount(<Menu />);
    cy.get("[data-cy-id=buttonClose]").should("contain","Close panel")
  });
  
});