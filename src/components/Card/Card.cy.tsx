import { mount } from '@cypress/react';
import  Card  from '@testing-library/cypress';


describe('Card component tests', () => {
  it('Should be mounted', () => {
    mount(<Card />);
  });

  it('Should contain the expected elements', () => {
    mount(<Card />)
      .findByTestId('card-container')
      .should('exist');

    mount(<Card />)
      .findByTestId('card-title')
      .should('have.text', 'Example Title');

    mount(<Card />)
      .findByTestId('card-content')
      .should('have.text', 'Example Content');
  });
});
