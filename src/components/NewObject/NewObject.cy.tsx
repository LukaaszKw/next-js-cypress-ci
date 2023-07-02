import { mount } from '@cypress/react18';
import NewObject from '../NewObject/NewObject';

describe('NewObject component tests', () => {
  beforeEach(() => {
    mount(<NewObject />);
  })
  it('Shoud be mounted', () => {
   // mount(<NewObject />);
  });

  it('Shoud be visible and have text', () => {
   // mount(<NewObject />);
    cy.get("[data-cy-id='button']")
    .should('be.visible')
    .and('contain', 'New Object');
  });
});