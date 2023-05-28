import { mount } from '@cypress/react18';
import Counter from './counter';

describe('Counter component tests', () => {
  it('Shoud be mounted', () => {
    mount(<Counter />);
  });

  it('Shoud count value be equal to 2', () => {
    mount(<Counter />);
    cy.get("[data-cy-id='count']").click().click()
    cy.get("[data-cy-id='count-value']")
    .should('contain', '2 times')
  });
});