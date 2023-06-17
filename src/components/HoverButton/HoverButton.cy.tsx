import { mount } from '@cypress/react18';
import HoverButton from '../HoverButton/HoverButton';

describe('Hover Button component tests', () => {
    it('Should be mounted', () => {
    mount(<HoverButton />);
    });
    
    it('Check if button is enabled', () => {
    mount(<HoverButton />);
    cy.get('button').should('be.enabled')
    });

    it('Check if button contains text', () => {
    mount(<HoverButton />);
    cy.get('button').should('have.text', 'Naciśnij!')
    });

});