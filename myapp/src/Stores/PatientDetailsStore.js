import {EventEmitter} from 'events';

import Dispatcher from '../Dispatcher';

class PatientDetailsStore extends EventEmitter {
    constructor() {
        super();
        this.currentPatient = {};
    }

    getCurrentPatient() {
        return this.currentPatient;
    }

    handleActions(action) {
        let eventEmitter = new EventEmitter.EventEmitter();
        switch(action.type) {
            case "UPDATE_CURRENT_PATIENT": {
                this.currentPatient = action.object;
                eventEmitter.emit("change");
                console.log("Current patient is " + action.object.firstName);
                break;
            }
        }
    }
}

const patientDetailsStore = new PatientDetailsStore;
Dispatcher.register(patientDetailsStore.handleActions.bind(PatientDetailsStore));
window.dispatcher = Dispatcher;
export default patientDetailsStore;