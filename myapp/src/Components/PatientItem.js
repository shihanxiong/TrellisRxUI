import React, { Component } from 'react';

class PatientItem extends Component {
    render() {
        return (
            <li className="Patient">
                <strong>{this.props.patient.lastName} {this.props.patient.firstName}</strong>, {this.props.patient.town}
            </li>
        );
    }
}

// Validation prop types
PatientItem.propTypes = {
    patient: React.PropTypes.object,
}

export default PatientItem;
