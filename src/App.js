import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import SubbappyHome from './components/SubbappyHome'
//import Navbar from './components/Navbar';
import {Routes} from './Routes';

class App extends Component {
  render() {
    return (
      <div>
       <Routes/>
      </div>
    );
  }
}

export default App;