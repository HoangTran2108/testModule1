class Rectangle {
    constructor (x,y,width,height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    getX() {
        return this.x;
    }
    getY() {
        return this.y;
    }
    getWidth() {
        return this.width;
    }
    getHeight() {
        return this.height;
    }
}
let rectangle = new Rectangle(10,10,200,100);
let x = rectangle.getX();
let y = rectangle.getY();
let width = rectangle.getWidth();
let height = rectangle.getHeight();
let canvas = document.getElementById("Canvas");
let ctx = canvas.getContext('2d');
ctx.fillStyle='#000000';
ctx.fillRect(x, y, width, height)