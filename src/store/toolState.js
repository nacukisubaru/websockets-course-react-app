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
    /*action для вызова сеттера экземпляра класса который храниться в стейте tool*/
    setFillColor(color) {
        this.tool.fillColor = color;
    }

    setStrokeColor(color) {
        this.tool.strokeColor = color;
    }

    setLineWidth(width) {
        this.tool.lineWidth = width;
    }
}

export default new ToolState();