import {EventEmitter} from 'events';
import $ from 'jquery';
import Dispatcher from '../Dispatcher';

class MedicinesStore extends EventEmitter {
    constructor() {
        super();
        this.handleActions = this.handleActions.bind(this);
        this.medicines = [];
    }

    getMedicines(id) {

        // TODO: Need to emit change AFTER the ajax async call is complete

        $.ajax({
          url: 'http://localhost:3333/patients/' + id + '/meds',
          // url: 'http://localhost:3333/patients/598d2df6de25cc3394d8ab30/meds',
          dataType: 'json',
          cache: false,
          success: function(data) {
            // this.setState({medicines: data}, function(){
            //   //this.emit("change");
            // });
            this.medicines = data;
          }.bind(this),
          complete: function(data) {
            this.emit("change");
          }.bind(this),
          error: function(xhr, status, err) {
            console.log(err);
          }.bind(this)
        });
    }

    getAllMedicines() {
        return this.medicines;
    }

    handleActions(action) {
        let eventEmitter = new EventEmitter.EventEmitter();
        switch(action.type) {
            case "UPDATE_CURRENT_PATIENT": {
                console.log("Current patient id is " + action.id);
                this.getMedicines(action.id);
                break;
            }
        }
    }
}

const medicinesStore = new MedicinesStore;
Dispatcher.register(medicinesStore.handleActions.bind(MedicinesStore));
window.medicinesStore = medicinesStore;
window.dispatcher = Dispatcher;
export default medicinesStore;