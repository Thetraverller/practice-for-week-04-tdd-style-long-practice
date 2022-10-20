class Person {
  // Your code here
  constructor (name, age) {
    this.name = name,
    this.age = age
  }

  static greetAll(array) {
    array.forEach(el => {
      if ( !(el instanceof Person) ) {
        throw new TypeError('all elements must be an instance of the Person class');
      }
    });

    const greetings = array.map(el => el.sayHello());

    return greetings;
  }

  sayHello() {
    return `Hello ${this.name}!`;
  }

  visit(otherPerson) {
    return `${this.name} visited ${otherPerson.name}`;
  }

  switchVisit(otherPerson) {
    return otherPerson.visit(this);
  }

  update(obj) {

    if(typeof obj !== 'object' || obj === null) {
      throw new TypeError('argument must be an object');
    } else if (!obj.name || !obj.age) {
      throw new TypeError('object must have a name and age property');
    }

    this.name = obj.name;
    this.age = obj.age;
  }

  tryUpdate(obj) {

    try {
      this.update(obj);
      return true;
    } catch (e) {
      return false;
    }
  }

}

module.exports = Person;
