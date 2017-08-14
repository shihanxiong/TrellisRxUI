import React, { Component } from 'react';
import MedicineItem from './MedicineItem';
import MedicinesStore from '../Stores/MedicinesStore';

class Medicines extends Component {
    constructor() {
        super();
        this.state =  {
            medicines: MedicinesStore.getAllMedicines(),
        };
    }

    componentWillMount() {
        MedicinesStore.on("change", () => {
            this.setState({
                medicines: MedicinesStore.getAllMedicines()
            });
        });
    }

    render() {
        let medicineItems;
        if (this.state.medicines) {
            medicineItems = this.state.medicines.map(medicine => {
                return (
                    <MedicineItem key = {medicine.medname} medicine = {medicine} />
                );
            });
        }

        return (
            <div className="Medicines">
                <h4>Meds List</h4>
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
 