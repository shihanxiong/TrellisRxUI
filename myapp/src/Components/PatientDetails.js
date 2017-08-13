import React, { Component } from 'react';

class PatientDetails extends Component {
    render() {
        return (
            <div className="PatientDetails">
                This is the place holder for patient details.
                {this.props.patient}
            </div>
        );
    }
}

// Validation prop types
PatientDetails.propTypes = {
    patientDetails: React.PropTypes.object,
}

export default PatientDetails;
