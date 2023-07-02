import { mount } from '@cypress/react18';
import HorizonUI from '@/components/HorizonUI/HorizonUI';

// Group of tests for the HorizonUI component.
describe('HorizonUI Component', () => {
    // This function runs before each test. It mounts the HorizonUI component to the DOM, preparing it for the tests.
    beforeEach(() => {
      mount(<HorizonUI />);
    });
  
    // This test checks if the HorizonUI component renders correctly by checking if an element with the class 'horizon-ui' is visible.
    it('should render the component', () => {
      cy.get('[data-cy="horizon-ui"]').should('be.visible');
    });
  
    // This test checks if the 'Horizon UI Inputs' heading is correctly rendered by checking if a h4 element containing the text 'Horizon UI Inputs' is visible.
    it('should render the Horizon UI Inputs heading', () => {
      cy.contains('Horizon UI Inputs').should('be.visible');
    });
  
    // This test checks if the Default input field is correctly rendered by checking if an input element with the id 'email' is visible.
    it('should render the Default input', () => {
      cy.get('[data-cy="default-input"]').should('be.visible');
    });
  
    // This test checks if the Success input field is correctly rendered by checking if an input element with the id 'email2' is visible.
    it('should render the Success input', () => {
      cy.get('[data-cy="success-input"]').should('be.visible');
    });
  
    // This test checks if the Error input field is correctly rendered by checking if an input element with the id 'email3' is visible.
    it('should render the Error input', () => {
      cy.get('[data-cy="error-input"]').should('be.visible');
    });
  
    // This test checks if the Disabled input field is correctly rendered by checking if an input element with the id 'email4' is disabled.
    it('should render the Disabled input', () => {
      cy.get('[data-cy="disabled-input"]').should('be.disabled');
    });
  });