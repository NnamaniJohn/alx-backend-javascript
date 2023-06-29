export default class Building {
  constructor(sqft) {
    this._sqft = typeof sqft === 'number' ? sqft : null;
    this.evacuationWarningMessage = '';
  }

  get sqft() {
    return this._sqft;
  }

  evacuationWarningMessage() {
    this.evacuationWarningMessage = '';
    console.log('Error: Class extending Building must override evacuationWarningMessage');
  }
}
