import {EventEmitter} from 'events';

import Dispatcher from '../Dispatcher';

class MedicinesStore extends EventEmitter {
    constructor() {
        super();
        this.medicines = [{
            medname: "Aspirin",
            dose: "10mg"
        }];
    }

    getAllMedicines() {
        return this.medicines;
    }

    handleActions(action) {
        let eventEmitter = new EventEmitter.EventEmitter();
        switch(action.type) {
            case "UPDATE_CURRENT_PATIENT": {
                this.id = action.id;
                eventEmitter.emit("change");
                console.log("Current patient id is " + action.id);
                break;
            }
        }
    }
}

const medicinesStore = new MedicinesStore;
Dispatcher.register(medicinesStore.handleActions.bind(MedicinesStore));
window.dispatcher = Dispatcher;
export default medicinesStore;