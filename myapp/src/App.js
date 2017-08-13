import React, { Component } from 'react';
import $ from 'jquery';
import logo from './logo.svg';
import nodejslogo from './nodejslogo.svg';
import mongodblogo from './mongodblogo.svg';
import './App.css';
import Patients from './Components/Patients';
import PatientDetails from './Components/PatientDetails';

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: [],
      todos: [],
      patients: [],
      currentPatient: {}
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

  componentWillMount() {
    this.getPatients();
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
        <strong>Patient details</strong>
        <PatientDetails currentPatient={this.state.currentPatient} />
        <hr/>
      </div>
    );
  }
}

export default App;
