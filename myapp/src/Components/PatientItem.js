import React, { Component } from 'react';

class PatientItem extends Component {
    render() {
        return (
            <li className="Patient">
                name: <strong>{this.props.patient.firstName} {this.props.patient.lastName}</strong>, 
                town: {this.props.patient.town}, 
                last pulse: <strong>{this.props.patient.pulse}</strong>, 
                last temperature: <strong>{this.props.patient.temperature}</strong>
                <span>  </span>
                <input type="button" value="Show Medications" />
            </li>
        );
    }
}

// Validation prop types
PatientItem.propTypes = {
    patient: React.PropTypes.object,
}

export default PatientItem;
