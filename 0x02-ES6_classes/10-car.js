export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  get brand() {
    return this._brand;
  }

  get motor() {
    return this._motor;
  }

  get color() {
    return this._color;
  }

  cloneCar() {
    const { brand, motor, color } = this;
    const Constructor = Object.getPrototypeOf(this).constructor;
    return new Constructor(brand, motor, color);
  }
}
