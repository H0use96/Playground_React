import logo from './logo.svg';
import './App.css';

// Setup react hot loading
import {hot} from 'react-hot-loader/root'
import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        Hello hot loader!
        AWESOME!
      </header>
    </div>
  );
}

export default hot(App);
