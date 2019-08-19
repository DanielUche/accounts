const arr = [1, 2, 4, 5, 6, 7, 8];

Array.prototype.ave = function() {
  return this.reduce((all, cur) => (all + cur) / this.length, 0);
};

console.log('Average is: ', arr.ave());

function Shape() {
  this.x = 0;
  this.y = 0;
}

// superclass method
Shape.prototype.move = function(x, y) {
  this.x += x;
  this.y += y;
  console.info('Shape moved.', this.x, this.y);
};
const sh = new Shape();
sh.move(2, 3);
sh.move(1, 1);

// Rectangle - subclass
function Rectangle() {
  Shape.call(this); // call super constructor.
}

Rectangle.prototype = Object.create(Shape.prototype);
// Rectangle.prototype.constructor = Rectangle;

const rect = new Rectangle();

rect.move(1, 2);
