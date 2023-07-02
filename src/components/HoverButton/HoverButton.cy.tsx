import { mount } from '@cypress/react18';
import HoverButton from '../HoverButton/HoverButton';

describe('Hover Button component tests', () => {
    beforeEach('Should be mounted', () => {
    mount(<HoverButton />);
    });
    
    afterEach('Check if button is enabled', () => {
    mount(<HoverButton />);
    cy.get('button').should('be.enabled')
    });

    it('Check if button contains text', () => {
    mount(<HoverButton />);
    cy.get("[button-id='button']").should('have.text', 'Naciśnij!')
    });

});