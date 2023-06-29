export default class Currency {
  constructor(code, name) {
    this._code = typeof code === 'string' ? code : null;
    this._name = typeof name === 'string' ? name : null;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }

  get code() {
    return this._code;
  }

  get name() {
    return this._name;
  }

  set code(newCode) {
    this._code = newCode;
  }

  set name(newName) {
    this._name = newName;
  }
}
