import React from 'react';
import renderer from 'react-test-renderer';
import AddArticleForm from './AddArticleForm';

describe('AddArticleForm Component tests', () => {
    it('AddArticleForm match snapshot', () => {
        const component = renderer.create(<AddArticleForm />);
        const tree = component.toJSON();

        expect(tree).toMatchSnapshot();
    });
});