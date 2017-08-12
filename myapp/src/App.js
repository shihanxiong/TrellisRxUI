import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Projects from './Components/Projects';

class App extends Component {
  constructor () {
    super();
    this.state = {
      projects : [
        {
          title : 'Business Website',
          category : 'Web Design'
        },
        {
          title : 'Social App',
          category : 'Mobile Development'
        },
        {
          title : 'Ecommerce Shopping Cart',
          category : 'Web Development'
        }
      ]
    }
  }

  render() {
    return (
      <div className="App">
        {/* Default layout */}
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        {/* Application */}
        <Projects projects = {this.state.projects} />
      </div>
    );
  }
}

export default App;
