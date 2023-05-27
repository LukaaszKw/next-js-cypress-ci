import { mount } from '@cypress/react18';
import Counter from './counter';

describe('App.cy.tsx - test for Welcome page', () => {
  it('playground', () => {
    mount(<Counter />);
    cy.get("[data-cy-id='count']").click().click()
    
  });
});