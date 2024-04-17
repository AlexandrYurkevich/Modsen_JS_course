class Rectangle {
  constructor(width,height) {
    this.width = width;
    this.height = height;
  }
  square = () => this.width*this.height;
  perimeter = () => (this.width+this.height)*2;
}

let obj = new Rectangle(5,6)
console.log(obj.square()); //30
console.log(obj.perimeter()) //22