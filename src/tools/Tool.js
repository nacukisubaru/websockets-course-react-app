export default class Tool {
    constructor(canvas) {
        this.canvas = canvas;
        /*2d канвас*/
        this.ctx = canvas.getContext('2d');
        this.destroyEvents();
    }

    /*сброс событий мыши*/
    destroyEvents() {
        this.canvas.onmousemove = null;
        this.canvas.onmousedown = null;
        this.canvas.onmouseup = null;
    }
}