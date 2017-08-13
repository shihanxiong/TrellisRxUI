import React, { Component } from 'react';
import PatientItem from './PatientItem';

class Patients extends Component {
    render() {
        let patientItems;
        if (this.props.patients) {
            patientItems = this.props.patients.map(patient => {
                return (
                    <PatientItem key = {patient._id} patient = {patient} />
                );
            });
        }

        return (
            <div className="Patients">
                <h3>All Patients</h3>
                {patientItems}
            </div>
        );
    }
}

// Validation prop types
Patients.propTypes = {
    patients: React.PropTypes.array,
}

export default Patients;
 