'use strict';
require('babel-register')({
  presets: [ 'es2015', 'react', 'stage-2' ]
});
const test = require('tape');
const React = require('react');
const ReactDOM = require('react-dom/server');
const TestUtils = require('react-addons-test-utils');
const Component = require('d:\REact\react\src\client\components\common\ProtectedRoute.js').default;

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

test('not required proptype component is actually not required', assert => {
  let props = {"authorized":true};
  props = convertFunctionProp(props);
  assert.doesNotThrow(() => ReactDOM.renderToString(React.createElement(Component, props)));
  assert.end();
});

test('not required proptype authorized is actually not required', assert => {
  let props = {"component":"() => {}"};
  props = convertFunctionProp(props);
  assert.doesNotThrow(() => ReactDOM.renderToString(React.createElement(Component, props)));
  assert.end();
});
