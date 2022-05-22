export default class Tool {
    constructor(canvas) {
        this.canvas = canvas;
        /*2d канвас*/
        this.ctx = canvas.getContext('2d');
        this.destroyEvents();
    }
    
    /*сеттеры обратиться к ним можно как к свойству объекта это происходит в toolState*/
    /*меняем параметры у свойств 2d контекста канваса*/
    set fillColor(color) {
        this.ctx.fillStyle = color;
    }

    set strokeColor(color) {
        this.ctx.strokeStyle = color;
    }

    set lineWidth(width) {
        this.ctx.lineWidth = width;
    }

    /*сброс событий мыши*/
    destroyEvents() {
        this.canvas.onmousemove = null;
        this.canvas.onmousedown = null;
        this.canvas.onmouseup = null;
    }
}