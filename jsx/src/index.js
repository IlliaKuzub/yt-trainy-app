// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component

function TextButton() {
    return 'click on me my friend -_-';
}

const labelName = {text: 'Enter name: '};

const App = () => {
    return (
        <div>
            <label className="label" htmlFor="name">{labelName.text}</label>
            <input id="name" type="text" />
            <button style={{ backgroundColor: 'blue', color: 'white' }}>{TextButton()}</button>
        </div>
    );
};

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'));