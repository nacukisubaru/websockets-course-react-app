import Tool from "./Tool";

export default class Brush extends Tool {
    constructor(canvas, socket, id) {
        super(canvas, socket, id);
        this.listen();
    }

    listen() {
        /*назначение методов на события канваса*/
        /*использование bind для того чтобы использовать this внутри методов событий*/
        this.canvas.onmousemove = this.mouseMoveHandler.bind(this);
        this.canvas.onmousedown = this.mouseDownHandler.bind(this);
        this.canvas.onmouseup = this.mouseUpHandler.bind(this);
    }

    /*завершение линии если отпустили кнопку мыши*/
    mouseUpHandler(e) {
        this.mouseDown = false;
    }

    mouseDownHandler(e) {
        this.mouseDown = true;
        /*начать новый путь для того чтобы начать рисовать*/
        this.ctx.beginPath();
        /*Установить начальную точку для рисования взависимости от координат мыши*/
        this.ctx.moveTo(e.pageX - e.target.offsetLeft, e.pageY - e.target.offsetTop);
    }

    mouseMoveHandler(e) {
        if(this.mouseDown) {
            //this.draw(e.pageX - e.target.offsetLeft, e.pageY - e.target.offsetTop);
            
        }
    }

    draw(x, y) {
        /*метод для рисования линии по коориднатам мыши*/
        this.ctx.lineTo(x, y);
        /*выделение линии цветом*/
        this.ctx.stroke();
        console.log('draw');
    }

}