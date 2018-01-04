'use strict';

console.log('App.js is running!');

// JSX - JavaScript XML
var user = {
    name: 'Jay',
    age: '66',
    place: 'Betelgeuse'

};

var name = user.name,
    age = user.age,
    place = user.place;


var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        name.toUpperCase()
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        age
    ),
    React.createElement(
        'p',
        null,
        'Location: ',
        place
    )
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
