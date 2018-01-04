console.log('App.js is running!');

// JSX - JavaScript XML
const user = {
    name: 'Jay',
    age: '66',
    place: 'Betelgeuse'

}

const {name, age, place} = user

const template = (
    <div>
        <h1>{name.toUpperCase()}</h1>
        <p>Age: {age}</p>
        <p>Location: {place}</p>
    </div>
);
const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
