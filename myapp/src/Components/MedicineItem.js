import React, { Component } from 'react';
import Dispatcher from '../Dispatcher';
import $ from 'jquery';

class MedicineItem extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        let startDate = new Date(this.props.medicine.startDate).toDateString();
        let stopDate;
        if (this.props.medicine.stopDate) {
            stopDate = new Date(this.props.medicine.stopDate).toDateString();
        }

        return (
            <li className="Medicines">
                Medname: {this.props.medicine.medname},
                Dose: {this.props.medicine.dose},
                StartDate: {startDate},
                StopDate: {stopDate}
            </li>
        );
    }
}

// Validation prop types
MedicineItem.propTypes = {
    patient: React.PropTypes.object,
}

export default MedicineItem;
