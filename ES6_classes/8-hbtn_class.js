export default class HolbertonClass {
    constructor(size, location) {
      // Vérification des types des attributs
      if (typeof size !== 'number') {
        throw new TypeError('Size must be a number');
      }
      if (typeof location !== 'string') {
        throw new TypeError('Location must be a string');
      }
  
      this._size = size;
      this._location = location;
    }
  
    // Getter pour "size"
    get size() {
      return this._size;
    }
  
    // Setter pour "size"
    set size(newSize) {
      if (typeof newSize !== 'number') {
        throw new TypeError('Size must be a number');
      }
      this._size = newSize;
    }
  
    // Getter pour "location"
    get location() {
      return this._location;
    }
  
    // Setter pour "location"
    set location(newLocation) {
      if (typeof newLocation !== 'string') {
        throw new TypeError('Location must be a string');
      }
      this._location = newLocation;
    }
  
    // Conversion en Number : retourne la taille
    valueOf() {
      return this._size;
    }
  
    // Conversion en String : retourne l'emplacement
    toString() {
      return this._location;
    }
  }
  