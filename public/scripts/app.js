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

var user = {
  name: 'Jay',
  age: '17',
  place: 'Betelgeuse'
};

var name = user.name,
    age = user.age,
    place = user.place;


function getLocation(something) {
  if (something) {
    return React.createElement(
      'p',
      null,
      'Location: ',
      place
    );
  }

  // return 'unknown'
}

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name ? user.name.toUpperCase() : 'Anonymous'
  ),
  age && age >= 18 && React.createElement(
    'p',
    null,
    'Age: ',
    age
  ),
  getLocation(place)
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
