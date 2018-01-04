console.log('App.js is running!');

// JSX - JavaScript XML
// var template = <p>This is JSX from app.js!</p>;
const template = React.createElement(
  "h1",
  { id: "someid" },
  "Something borrowed"
);
const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);