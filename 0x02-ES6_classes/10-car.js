export default class Car {
  constructor(brand, motor, color) {
    if (typeof brand !== 'string') throw TypeError('Brand must be a String');
    if (typeof motor !== 'string') throw TypeError('Motor must be a String');
    if (typeof color !== 'string') throw TypeError('Color must be a String');

    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    const obj = Object.create(this);
    return obj;
  }
}
