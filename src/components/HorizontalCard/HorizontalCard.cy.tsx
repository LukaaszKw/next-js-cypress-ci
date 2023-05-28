import { mount } from '@cypress/react18';
import HorizontalCard from './HorizontalCard';

describe('HorizontalCard component tests', () => {
  it('Should be mounted', () => {
    mount(<HorizontalCard />);
  });

  it('Should be visible', () => {
    mount(<HorizontalCard />);
    cy.get('.horizontal-card').should('be.visible');
  })

  it('Button should be visible', () => {
    mount(<HorizontalCard />);
    cy.get('.linear').should('be.visible')
  })

  it('Button should be clickable', () => {
    mount(<HorizontalCard />);
    cy.get('.linear').click()
  })
  
  it('Bar should be visible', () => {
    mount(<HorizontalCard />);
    cy.get(':nth-child(3) > .mt-2').should('be.visible')
    cy.get('.mt-2 > .h-full').should('be.visible')
})
});  