import React from 'react';
import renderer from 'react-test-renderer';
import ErrorField from './ErrorField';

describe('ErrorField Component tests', () => {
    it('ErrorField match snapshot', () => {
        const component = renderer.create(<ErrorField />);
        const tree = component.toJSON();

        expect(tree).toMatchSnapshot();
    });
});