import Counter from './Counter';

describe('Counter component tests', () => {
  it('Shoud be mounted', () => {
    cy.mount(<Counter />);
  });
});