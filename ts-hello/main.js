function log(message) {
    console.log(message);
}
var message = 'hello world';
log(message);
var a;
var b = [1, 2, 3];
var c = [1, '2', true];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var backgroundColor = Color.Red;
;
var drawPoint = function (point) {
    // ...
};
drawPoint({
    x: 1,
    y: 0
});
var MyPoint = /** @class */ (function () {
    function MyPoint(x, y) {
        var _this = this;
        this.draw = function () {
            console.log('X: ' + _this.x + '\nY: ' + _this.y);
        };
        this.x = x;
        this.y = y;
    }
    return MyPoint;
}());
var point = new MyPoint(2, 2);
point.draw();
