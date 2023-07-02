import { mount } from '@cypress/react18';
import FancyButton from '../FancyButton/FancyButton';

describe('FancyButton component tests', () => {
  beforeEach('Shoud be mounted', () => {
    mount(<FancyButton />);
  });

  it('Shoud be visible and have text', () => {
    mount(<FancyButton />);
    cy.get("[data-cy-id='button']")
    cy.should('be.visible')
    cy.and('contain', 'Fancy button');
  });
});