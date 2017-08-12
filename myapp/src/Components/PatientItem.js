import React, { Component } from 'react';
import PatientDetails from './PatientDetails';

class PatientItem extends Component {
    handleClick(id){
        console.log("selected patient id = " + id);
    }

    render() {
        return (
            <li className="Patient">
                name: <strong>{this.props.patient.firstName} {this.props.patient.lastName}</strong>, 
                town: {this.props.patient.town}, 
                last pulse: <strong>{this.props.patient.pulse}</strong>, 
                last temperature: <strong>{this.props.patient.temperature}</strong>
                <span>  </span>
                <input type="button" value="Show Medications" onClick={this.handleClick.bind(this, this.props.patient._id)} />
            </li>
        );
    }
}

// Validation prop types
PatientItem.propTypes = {
    patient: React.PropTypes.object,
}

export default PatientItem;
