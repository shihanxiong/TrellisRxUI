import React, { Component } from 'react';
import $ from 'jquery';
import logo from './logo.svg';
import nodejslogo from './nodejslogo.svg';
import mongodblogo from './mongodblogo.svg';
import './App.css';
import Patients from './Components/Patients';
import Medicines from './Components/Medicines';

class App extends Component {
  constructor() {
    super();
    this.state = {
      patients: [],
      medicines: []
    }
  }

  getPatients() {
    $.ajax({
      url: 'http://localhost:3333/patients/showall',
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({patients: data}, function(){
          console.log(this.state);
        });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
      }
    });
  }

  getMedicines(id) {
    $.ajax({
      url: 'http://localhost:3333/patients/' + id + '/meds',
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({medicines: data}, function(){
          console.log(this.state);
        });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
      }
    });
  }

  componentWillMount() {
    this.getPatients();
    // this.getMedicines();
  }

  componentDidMount() {
    this.getPatients();
  }

  render() {
    return (
      <div className="App">
        {/* Layout */}
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <img src={nodejslogo} alt="logo" /> <strong>+</strong>
          <img src={mongodblogo} alt="logo" />
          <h2>Coding Exercise (React/Flux + Nodejs + MongoDB)</h2>
        </div>

        {/* Application */}
        <Patients patients={this.state.patients} />
        <hr/>
        <Medicines medicines={this.state.medicines} />
        <hr/>
      </div>
    );
  }
}

export default App;
