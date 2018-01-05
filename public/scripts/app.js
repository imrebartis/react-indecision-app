'use strict';

console.log('App.js is running!');

// JSX - JavaScript XML
var app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: ['One', 'Two']
};

var title = app.title,
    subtitle = app.subtitle,
    options = app.options;

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    title
  ),
  subtitle && React.createElement(
    'p',
    null,
    subtitle
  ),
  React.createElement(
    'p',
    null,
    options.length > 0 ? 'Here are your options' : 'No options'
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'Item one'
    ),
    React.createElement(
      'li',
      null,
      'Item two'
    )
  )
);

var count = 0;
var addOne = function addOne() {
  console.log('addOne');
};
var minusOne = function minusOne() {
  console.log('minusOne');
};
var reset = function reset() {
  console.log('reset');
};
var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Count: ',
    count
  ),
  React.createElement(
    'button',
    { onClick: addOne },
    '+1'
  ),
  React.createElement(
    'button',
    { onClick: minusOne },
    '-1'
  ),
  React.createElement(
    'button',
    { onClick: reset },
    'reset'
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
