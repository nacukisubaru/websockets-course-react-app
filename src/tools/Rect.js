import Tool from "./Tool";

export default class Brush extends Tool {
    constructor(canvas) {
        super(canvas);
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
        /*Установка координат при нажатие на мышь*/
        this.startX = e.pageX - e.target.offsetLeft;
        this.startY = e.pageY - e.target.offsetTop;
        /*запись ссылки отрисованной картинки*/
        this.saved = this.canvas.toDataURL();
    }

    mouseMoveHandler(e) {
        if(this.mouseDown) {
            /*Текущие координаты при движении мыши*/
            let currentX = e.pageX - e.target.offsetLeft;
            let currentY = e.pageY - e.target.offsetTop;
            /*расчет высоты и ширины взависимости от того где мы кликнули и куда перетащили курсор мыши */
            let width = currentX - this.startX;
            let height = currentY - this.startY;
            this.draw(this.startX, this.startY, width, height);
        }
    }

    draw(x, y, w, h) {
        /*создание картинки*/
        const img = new Image();
        img.src = this.saved;
        img.onload = () => {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            /*отрисовка сохраненной картинки*/
            this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
            this.ctx.beginPath();
            this.ctx.rect(x, y, w, h);
            this.ctx.fill();
            this.ctx.stroke();
        }
    }

}