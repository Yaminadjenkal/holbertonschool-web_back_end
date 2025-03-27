import Currency from './3-currency.js';

export default class Pricing {
  constructor(amount, currency) {
    // Vérification des types lors de la création
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    if (!(currency instanceof Currency)) {
      throw new TypeError('Currency must be an instance of the Currency class');
    }

    this._amount = amount;
    this._currency = currency;
  }

  // Getter pour "amount"
  get amount() {
    return this._amount;
  }

  // Setter pour "amount"
  set amount(newAmount) {
    if (typeof newAmount !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._amount = newAmount;
  }

  // Getter pour "currency"
  get currency() {
    return this._currency;
  }

  // Setter pour "currency"
  set currency(newCurrency) {
    if (!(newCurrency instanceof Currency)) {
      throw new TypeError('Currency must be an instance of the Currency class');
    }
    this._currency = newCurrency;
  }

  // Méthode pour afficher le prix complet
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  // Méthode statique pour convertir un prix
  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
      throw new TypeError('Both amount and conversionRate must be numbers');
    }
    return amount * conversionRate;
  }
}

