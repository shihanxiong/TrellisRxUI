import React, { Component } from 'react';
import Dispatcher from '../Dispatcher';
import $ from 'jquery';

class PatientItem extends Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            newVitals: {}
        }
    }

    handleClick(patient){
        console.log("selected patient is " + patient._id);
        Dispatcher.dispatch({
            type: "UPDATE_CURRENT_PATIENT",
            id: patient._id
        });
    }

    handleSubmit(e) {
        if (this.refs.pulse.value === '') {
            alert('Pulse is required.');
        } else if (this.refs.temperature.value === '') {
            alert('Temperature is required.');
        } else {
            console.log("Prepare to save vitals.");

            let newVitals = {
                id: this.props.patient._id,
                pulse: this.refs.pulse.value * 1,
                temperature: this.refs.temperature.value * 1
            };

            console.log(newVitals);

            $.ajax({
                url: 'http://localhost:3333/patients/updatevitals',
                contentType: "application/json",
                dataType: 'json',
                type: "POST",
                data: JSON.stringify(newVitals),
                success: function(data, status, xhr) {
                    console.log('Data saved successfully.');
                }.bind(this),
                complete: function(data) {
                    alert('Data saved successfully. Please refresh the page to see the latest data.');
                },
                error: function(err) {
                    console.log(err);
                }
            });

            this.setState({newVitals: newVitals});
            e.preventDefault();
        }
    }

    render() {
        return (
            <li className="Patient">
                Name: <strong>{this.props.patient.firstName} {this.props.patient.lastName}</strong>, 
                Town: {this.props.patient.town}, 
                Last pulse: <strong>{this.props.patient.pulse}</strong>, 
                Last temperature: <strong>{this.props.patient.temperature}</strong>
                <span>   </span>
                <input type="button" value="Show Medications" onClick={this.handleClick.bind(this, this.props.patient)} />
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div>
                        <label>Enter Pulse</label>
                        <input type="number" ref="pulse" />
                        <label>Enter Temperature</label>
                        <input type="number" ref="temperature" />
                        <input type="submit" value="submit" />
                    </div>
                </form>
            </li>
        );
    }
}

// Validation prop types
PatientItem.propTypes = {
    patient: React.PropTypes.object,
}

export default PatientItem;
