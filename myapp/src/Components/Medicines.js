import React, { Component } from 'react';
import MedicineItem from './MedicineItem';

class Medicines extends Component {
    render() {
        let medicineItems;
        if (this.props.medicines) {
            medicineItems = this.props.medicines.map(medicine => {
                return (
                    <MedicineItem key = {medicine.medname} medicine = {medicine} />
                );
            });
        }

        return (
            <div className="Medicines">
                <h3>List of meds</h3>
                {medicineItems}
            </div>
        );
    }
}

// Validation prop types
Medicines.propTypes = {
    medicines: React.PropTypes.array,
}

export default Medicines;
 