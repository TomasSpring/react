'use strict';
require('babel-register')({
  presets: [ 'es2015', 'react', 'stage-2' ]
});
const test = require('tape');
const React = require('react');
const ReactDOM = require('react-dom/server');
const TestUtils = require('react-addons-test-utils');
const Component = require('d:\REact\react\src\client\components\auth\SignIn.js').default;

function convertFunctionProp(props) {
 return Object.keys(props).reduce((newProps, prop, i) => {
    if (props[prop] === '() => {}') {
      newProps[prop] = () => {};
    }
    else {
      newProps[prop] = props[prop];
    }
    return newProps;
  }, {});
}

test('is a valid React Component', assert => {
  assert.ok(TestUtils.isElement(React.createElement(Component, {})), 'is valid');
  assert.end();
});

test('not required proptype handleSubmit is actually not required', assert => {
  let props = {};
  props = convertFunctionProp(props);
  assert.doesNotThrow(() => ReactDOM.renderToString(React.createElement(Component, props)));
  assert.end();
});
