import { mount } from '@cypress/react18';
import Counter from './clickme';

describe('Counter component tests', () => {
  it('Shoud be mounted', () => {
    mount(<Counter />);
  });
});