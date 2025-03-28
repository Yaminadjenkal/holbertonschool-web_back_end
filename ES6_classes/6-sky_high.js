import Building from './5-building.js';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    // Appeler le constructeur de la classe parente
    super(sqft);

    // Vérifier que floors est un nombre
    if (typeof floors !== 'number') {
      throw new TypeError('floors must be a number');
    }

    this._floors = floors;
  }

  // Getter pour "floors"
  get floors() {
    return this._floors;
  }

  // Override de la méthode evacuationWarningMessage
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
