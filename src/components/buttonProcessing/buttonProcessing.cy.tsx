import { mount } from '@cypress/react18';
import ButtonProcessing from './buttonProcessing';

describe('Processing button compontent tests', () => {
  it('Should be mounted', () => {
    mount(<ButtonProcessing />);
  });


it('Check if processing button is enabled', () => {
  mount(<ButtonProcessing />);
  cy.get('button').should('be.enabled')
});

it('Check if processing button is enabled', () => {
  mount(<ButtonProcessing />);
  cy.get('button').should('have.text', 'Push me!')
});

});