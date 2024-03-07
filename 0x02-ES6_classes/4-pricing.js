import Currency from './3-currency.js';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number') throw TypeError('Amount must be a number');
    if (typeof currency !== 'object') throw TypeError('Currency must be a currency');

    this._amount = amount;
    this._currency = currency;
  }

  set amount(amount) {
    if (typeof amount !== 'number') throw TypeError('Amount must be a number');
    this._amount = amount;
  }

  get amount() {
    return this._amount;
  }

  set currency(currency) {
    if (typeof currency !== 'object') throw TypeError('Currency must be a currency');

    this._currency = currency;
  }

  get currency() {
    return this._currency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') throw TypeError('Amount must be a number');
    if (typeof conversionRate !== 'number') throw TypeError('Conversion Rate must be a number');

    return amount * conversionRate;
  }
}
