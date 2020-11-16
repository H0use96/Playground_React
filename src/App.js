import logo from './logo.svg';
import './App.css';

// Setup react hot loading
import {hot} from 'react-hot-loader/root'
import React from 'react';
import TodosContainer from "./Practice_Redux/Container/Container_Todo";
import IncreaseButton from "./Practice_Redux/Component/IncreaseButton";

// setup practice/css
import Searchbar from './Practice_CSS/searchbar'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <TodosContainer />
        <IncreaseButton />

        <Searchbar />

      </header>
    </div>
  );
}

export default hot(App);
