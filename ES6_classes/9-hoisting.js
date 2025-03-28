export class HolbertonClass {
    constructor(year, location) {
      this._year = year;
      this._location = location;
    }
  
    // Getter pour "year"
    get year() {
      return this._year;
    }
  
    // Getter pour "location"
    get location() {
      return this._location;
    }
  }
  
  export class StudentHolberton {
    constructor(firstName, lastName, holbertonClass) {
      if (!(holbertonClass instanceof HolbertonClass)) {
        throw new TypeError('holbertonClass must be an instance of HolbertonClass');
      }
  
      this._firstName = firstName;
      this._lastName = lastName;
      this._holbertonClass = holbertonClass;
    }
  
    // Getter pour "fullName"
    get fullName() {
      return `${this._firstName} ${this._lastName}`;
    }
  
    // Getter pour "holbertonClass"
    get holbertonClass() {
      return this._holbertonClass;
    }
  
    // Getter pour "fullStudentDescription"
    get fullStudentDescription() {
      return `${this._firstName} ${this._lastName} - ${this._holbertonClass.year} - ${this._holbertonClass.location}`;
    }
  }
  
  const class2019 = new HolbertonClass(2019, 'San Francisco');
  const class2020 = new HolbertonClass(2020, 'San Francisco');
  
  const student1 = new StudentHolberton('Guillaume', 'Salva', class2020);
  const student2 = new StudentHolberton('John', 'Doe', class2020);
  const student3 = new StudentHolberton('Albert', 'Clinton', class2019);
  const student4 = new StudentHolberton('Donald', 'Bush', class2019);
  const student5 = new StudentHolberton('Jason', 'Sandler', class2019);
  
  export const listOfStudents = [student1, student2, student3, student4, student5];
  