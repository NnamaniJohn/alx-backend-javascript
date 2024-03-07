export default class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') throw TypeError('Sqft must be a Number');
    this._sqft = sqft;

    if (this.constructor !== Building && this.evacuationWarningMessage === undefined) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  set sqft(sqft) {
    if (typeof sqft !== 'number') throw TypeError('Sqft must be a Number');
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }
}
