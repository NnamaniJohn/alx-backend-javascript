export default class Airport {
  constructor(name, code) {
    if (typeof name !== 'string') throw TypeError('Name must be a String');
    if (typeof code !== 'string') throw TypeError('Code must be a String');

    this._name = name;
    this._code = code;
  }

  toString() {
    return this._code;
  }
}
