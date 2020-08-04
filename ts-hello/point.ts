// if there's export keyword, then this class called module
export class MyPoint {
    private x: number;
    private y: number;

    /*
    constructor(private x?number: number, private y?: number) {} 
    */
    constructor(x?: number, y?: number) {
        this.x = x;
        this.y = y;
    }

    draw = () => {
        console.log('X: ' + this.x + '\nY: ' + this.y);
    }
    
    getX = () => this.x;

    get X() { return this.x; }

    set X(x) {
        if(x > 0) this.x = x;
    }
    setX = (x) => {
        if(x > 0) this.x = x;
    }
}
