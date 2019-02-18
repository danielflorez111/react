// Import React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component
const App = function () {
    const style = { backgroundColor: 'blue', color: 'white' };

    return (
        <div>
            <div>Hi there!</div>
            <button style={style}>Click</button>
        </div>
    );
};

// Take the react componet and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);