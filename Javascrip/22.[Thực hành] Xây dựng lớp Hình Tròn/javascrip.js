class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  getRadius() {
    return this.radius;
  }
  getArea() {
    return Math.PI * radius * radius;
  }
}
let circle = new Circle(5);
let radius = circle.getRadius();
let area = circle.getArea();

alert("radius: " + radius + "; area: " + area);
