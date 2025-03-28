export default class Airport {
    constructor(name, code) {
      // Vérification des types des attributs
      if (typeof name !== 'string') {
        throw new TypeError('Name must be a string');
      }
      if (typeof code !== 'string') {
        throw new TypeError('Code must be a string');
      }
  
      this._name = name;
      this._code = code;
    }
  
    // Getter pour "name"
    get name() {
      return this._name;
    }
  
    // Setter pour "name"
    set name(newName) {
      if (typeof newName !== 'string') {
        throw new TypeError('Name must be a string');
      }
      this._name = newName;
    }
  
    // Getter pour "code"
    get code() {
      return this._code;
    }
  
    // Setter pour "code"
    set code(newCode) {
      if (typeof newCode !== 'string') {
        throw new TypeError('Code must be a string');
      }
      this._code = newCode;
    }
  
    // Redéfinition de la méthode "toString"
    toString() {
      return `[object ${this._code}]`;
    }
  }
  