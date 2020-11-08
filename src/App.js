import logo from './logo.svg';
import './App.css';

// Setup react hot loading
import {hot} from 'react-hot-loader/root'
import React from 'react';
import TodosContainer from "./Practice_Redux/Container/Container_Todo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <TodosContainer />

      </header>
    </div>
  );
}

export default hot(App);
