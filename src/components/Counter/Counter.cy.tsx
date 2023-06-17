import { mount } from '@cypress/react18';
import Counter from './Counter';

describe('Counter component tests', () => {
  it('Shoud be mounted', () => {
    mount(<Counter />);
  });
});