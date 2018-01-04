console.log('App.js is running!');

// JSX - JavaScript XML
const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: ['One', 'Two']
  };

  const {title, subtitle, options} = app;
  const template = (
    <div>
      <h1>{title}</h1>
      {subtitle && <p>{subtitle}</p>}
      <p>{options.length > 0 ? 'Here are your options' : 'No options'}</p>
      <ol>
        <li>Item one</li>
        <li>Item two</li>
      </ol>
    </div>
  );

const user = {
    name: 'Jay',
    age: '17',
    place: 'Betelgeuse'
}

const {name, age, place} = user

function getLocation(something) {
    if (something) {
      return <p>Location: {place}</p>
    }

    // return 'unknown'
  }

const templateTwo = (
    <div>
        <h1>{user.name ? user.name.toUpperCase() : 'Anonymous'}</h1>
        {(age && age >= 18) && <p>Age: {age}</p>}
        {getLocation(place)}
    </div>
);
const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
