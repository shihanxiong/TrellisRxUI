import React, { Component } from 'react';
import uuid from 'uuid';
import $ from 'jquery';
import logo from './logo.svg';
import nodejslogo from './nodejslogo.svg';
import mongodblogo from './mongodblogo.svg';
import './App.css';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import Todos from './Components/Todos';
import Patients from './Components/Patients';
import PatientDetails from './Components/PatientDetails';

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: [],
      todos: [],
      patients: []
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

  getTodos() {
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/todos',
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({todos: data}, function(){
          console.log(this.state);
        });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
      }
    });
  }

  getProjects() {
    this.setState({
      projects: [
        {
          id: uuid.v4(),
          title: 'Business Website',
          category: 'Web Design'
        },
        {
          id: uuid.v4(),
          title: 'Social App',
          category: 'Mobile Development'
        },
        {
          id: uuid.v4(),
          title: 'Ecommerce Shopping Cart',
          category: 'Web Development'
        }
      ]
    });
  }

  componentWillMount() {
    this.getProjects();
    this.getTodos();
    this.getPatients();
  }

  componentDidMount() {
    this.getTodos();
  }

  handleAddProject(project) {
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects:projects});
  }

  handleDeleteProject(id) {
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index, 1);
    this.setState({projects:projects});
  }

  render() {
    return (
      <div className="App">
        {/* Layout */}
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <img src={nodejslogo} alt="logo" /> <strong>+</strong>
          <img src={mongodblogo} alt="logo" />
          <h2>Coding Exercise (React + Nodejs + MongoDB)</h2>
        </div>

        {/* Application */}
        <Patients patients={this.state.patients} />
        <hr/>
        <strong>Patient details</strong>
        <PatientDetails />
        <hr/>
        <AddProject addProject={this.handleAddProject.bind(this)}/>
        <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)} />
        <hr/>
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
