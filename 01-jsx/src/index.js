// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a React component
const App = () => {
    const buttonText = { text: 'Click me' };
    const labelText = 'Enter name:';

    return (
        <div>
            <label htmlFor="name">
                {labelText}
            </label>
            <input name="name" type="text" className="label" />
            <button style={{ backgroundColor: 'blue', color: 'white' }}>
                {buttonText.text}
            </button>
        </div>
    );
}

// Take the React component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);