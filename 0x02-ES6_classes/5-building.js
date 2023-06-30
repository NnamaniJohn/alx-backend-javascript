export default class Building {
  constructor(sqft) {
    this._sqft = typeof sqft === 'number' ? sqft : null;
    this.evacuation = '';
  }

  get sqft() {
    return this._sqft;
  }

  evacuationWarningMessage() {
    this.evacuation = '';
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
