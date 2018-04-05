'use strict';
require('babel-register')({
  presets: [ 'es2015', 'react', 'stage-2' ]
});
const test = require('tape');
const React = require('react');
const ReactDOM = require('react-dom/server');
const TestUtils = require('react-addons-test-utils');
const Component = require('d:\REact\react\src\client\components\routes\Auth.js').default;

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

test('not required proptype signIn is actually not required', assert => {
  let props = {"signUp":"() => {}","signOut":"() => {}","history":{},"auth":{}};
  props = convertFunctionProp(props);
  assert.doesNotThrow(() => ReactDOM.renderToString(React.createElement(Component, props)));
  assert.end();
});

test('not required proptype signUp is actually not required', assert => {
  let props = {"signIn":"() => {}","signOut":"() => {}","history":{},"auth":{}};
  props = convertFunctionProp(props);
  assert.doesNotThrow(() => ReactDOM.renderToString(React.createElement(Component, props)));
  assert.end();
});

test('not required proptype signOut is actually not required', assert => {
  let props = {"signIn":"() => {}","signUp":"() => {}","history":{},"auth":{}};
  props = convertFunctionProp(props);
  assert.doesNotThrow(() => ReactDOM.renderToString(React.createElement(Component, props)));
  assert.end();
});

test('not required proptype history is actually not required', assert => {
  let props = {"signIn":"() => {}","signUp":"() => {}","signOut":"() => {}","auth":{}};
  props = convertFunctionProp(props);
  assert.doesNotThrow(() => ReactDOM.renderToString(React.createElement(Component, props)));
  assert.end();
});

test('not required proptype auth is actually not required', assert => {
  let props = {"signIn":"() => {}","signUp":"() => {}","signOut":"() => {}","history":{}};
  props = convertFunctionProp(props);
  assert.doesNotThrow(() => ReactDOM.renderToString(React.createElement(Component, props)));
  assert.end();
});
