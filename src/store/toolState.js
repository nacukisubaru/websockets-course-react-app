import {makeAutoObservable} from "mobx";

class ToolState {
    tool = null;
    constructor() {
        /*observer для того чтобы класс был отслеживаемым*/
        makeAutoObservable(this);
    }

    /*action функция, любые функции которые меняют состояние*/
    setTool(tool) {
        this.tool = tool;
    }
}

export default new ToolState();