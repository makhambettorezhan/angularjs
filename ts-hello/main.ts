function log(message) {
    console.log(message);
}

var message = 'hello world';

log(message);

let a: number;
let b: number[] = [1, 2, 3];
let c: any[] = [1, '2', true ];

enum Color { Red = 0 , Green = 1, Blue = 2 };

let backgroundColor = Color.Red; 

interface Point {
    x: number,
    y: number
};

let drawPoint = ( point: Point ) => {
    // ...
};

drawPoint({
    x: 1,
    y: 0
});

import { MyPoint } from './point';

let point = new MyPoint(2, 2);
point.draw();