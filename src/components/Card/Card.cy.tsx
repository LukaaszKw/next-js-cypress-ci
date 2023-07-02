import React from 'react';
import { mount } from '@cypress/react';
import Card from './Card';

describe('Card component tests', () => {
    it('Should be mounted', () => {
        mount(<Card />);
    });
});
