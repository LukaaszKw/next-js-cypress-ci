import { mount } from 'cypress/react18';

import Card from './Card';

describe('Card component tests', () => {
  it('Should be mounted', () => {
    mount(<Card />);
  });

  it('Should display the profile picture', () => {
    mount(<Card />);
    cy.get('.w-32.h-32.rounded-full.mx-auto').should('be.visible');
  });

  it('Should display the name', () => {
    mount(<Card />);
    cy.contains('John Doe').should('be.visible');
  });

  it('Should display the job title', () => {
    mount(<Card />);
    cy.contains('Software Engineer').should('be.visible');
  });

  it('Should display social media links', () => {
    mount(<Card />);
    cy.get('.text-blue-500').should('have.length', 3);
    cy.contains('Twitter').should('be.visible');
    cy.contains('LinkedIn').should('be.visible');
    cy.contains('GitHub').should('be.visible');
  });

  it('Should display the bio', () => {
    mount(<Card />);
    cy.contains('Bio').should('be.visible');
    cy.contains('John is a software engineer').should('be.visible');
  });
});