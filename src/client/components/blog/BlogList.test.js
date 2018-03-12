import React from 'react';
import renderer from 'react-test-renderer';
import BlogList from './BlogList';

describe('BlogList Component tests', () => {
    it('BlogList match snapshot', () => {
        const component = renderer.create(<BlogList />);
        const tree = component.toJSON();

        expect(tree).toMatchSnapshot();
    });
});