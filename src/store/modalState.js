import {makeAutoObservable} from "mobx";

class ModalState {
    modal = true;
    constructor() {
        /*observer для того чтобы класс был отслеживаемым*/
        makeAutoObservable(this);
    }

    closeModal() {
        this.modal = false;
    }
}

export default new ModalState();