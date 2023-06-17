import { mount } from '@cypress/react18';
import FancyButton from '../FancyButton/FancyButton';

describe('FancyButton component tests', () => {
  it('Shoud be mounted', () => {
    mount(<FancyButton />);
  });

  it('Shoud be visible and have text', () => {
    mount(<FancyButton />);
    cy.get("[data-cy-id='button']")
    .should('be.visible')
    .and('contain', 'Fancy button');
  });
});