import React, { Component } from 'react';
import PatientDetailsStore from '../Stores/PatientDetailsStore';

class PatientDetails extends Component {
    constructor() {
        super();
        this.getCurrentPatient = this.getCurrentPatient.bind(this);
        this.state = {
            currentPatient: PatientDetailsStore.getCurrentPatient()
        };
    }

    componentWillMount() {
        PatientDetailsStore.on("change", this.getCurrentPatient);
    }

    getCurrentPatient() {
        this.setState({
            currentPatient: PatientDetailsStore.getCurrentPatient()
        });
    }

    render() {
        return (
            <div className="PatientDetails">
                {this.state.currentPatient.firstName} {this.state.currentPatient.lastName}
            </div>
        );
    }
}

// Validation prop types
PatientDetails.propTypes = {
    patientDetails: React.PropTypes.object
}

export default PatientDetails;
