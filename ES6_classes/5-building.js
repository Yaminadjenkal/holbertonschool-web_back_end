export default class Building {
  constructor(sqft) {
    // Vérification du type pour sqft
    if (typeof sqft !== 'number') {
      throw new TypeError('sqft must be a number');
    }

    this._sqft = sqft;
  }

  // Getter pour sqft
  get sqft() {
    return this._sqft;
  }

  // Méthode à implémenter dans les sous-classes
  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}

