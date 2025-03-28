const cloneSymbol = Symbol('cloneCar');

export default class Car {
  constructor(brand, motor, color) {
    // Verify and assign the attributes
    if (typeof brand !== 'string') throw new TypeError('Brand must be a string');
    if (typeof motor !== 'string') throw new TypeError('Motor must be a string');
    if (typeof color !== 'string') throw new TypeError('Color must be a string');

    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // Internal method using the symbol
  [cloneSymbol]() {
    return new this.constructor(this._brand, this._motor, this._color);
  }

  // Public method to clone the object
  cloneCar() {
    return this[cloneSymbol]();
  }
}
