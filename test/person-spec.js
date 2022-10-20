// Your code here

const chai = require('chai');
const spies = require('chai-spies');
const expect = chai.expect;
const Person = require('../problems/person.js');

describe('Person', function () {

  let person;
  let person2;

  beforeEach(() => {
    person = new Person('Mickey', 24);
    person2 = new Person("Teal'c", 60);
  });


  context('constructor', function () {

    it('has the name and age properties', function () {
      expect(person).to.have.all.keys('name', 'age');
    });

    it('sets the given name and age on the instance', function () {
      expect(person.name).to.eql('Mickey');
      expect(person.age).to.eql(24);
    });
  });


  context('sayHello', function () {

    it("returns a greeting using the Person instance's name", function () {
      const hi = person.sayHello();
      expect(hi).to.equal('Hello Mickey!');
    });
  });


  context('visit', function () {

    it('returns a string showing this instance visited another instance', function () {
      const visitor = person.visit(person2);
      expect(visitor).to.equal("Mickey visited Teal'c")
    });
  });


  context('switchVisit', function () {

    it('returns a string showing this instance was visited', function () {
      const visited = person.switchVisit(person2);
      expect(visited).to.equal("Teal'c visited Mickey");
    });

    it('calls the visit method on the passed in instance', function () {
      const visitor = chai.spy.on(person2, 'visit');
      person.switchVisit(person2);
      expect(visitor).to.have.been.called.once;
    });
  });


  context('update', function () {

    describe('when argument is a valid object', function () {

      it('updates instance properties with object properties', function () {
        const newDetails = { name: 'Spock', age: 33 };
        person.update(newDetails);
        expect(person.name).to.eql('Spock');
        expect(person.age).to.eql(33);
      });

      it("throws a TypeError when the object doesn't have name and age properties", function () {
        const book = { title: "The Grapes of Wrath", author: "Unknown"};
        expect(() => person.update(book)).to.throw(TypeError, 'name', 'age');
      });
    });


    describe('when argument is not a valid object', function () {

      it('throws a TypeError', function () {
        const notAPerson = 42;
        expect(() => person.update(notAPerson)).to.throw(TypeError, 'argument');
      });
    });
  });


  context('tryUpdate', function () {

    describe('when update is successful', function () {

      let newDetails;
      let pass;

      beforeEach(() => {
        newDetails = { name: 'Spock', age: 33 };
        pass = person.tryUpdate(newDetails);
      });

      it('updates instance properties with object properties', function () {
        expect(person.name).to.eql('Spock');
        expect(person.age).to.eql(33);
      });

      it("returns true", function () {
        expect(pass).to.be.true;
      });
    });


    describe('when update is not successful', function () {

      it('returns false', function () {
        const notAPerson = 42;
        const book = { title: "The Grapes of Wrath", author: "Unknown"};

        const fail = person.tryUpdate(notAPerson);
        const fail2 = person.tryUpdate(book);

        expect(fail).to.be.false;
        expect(fail2).to.be.false;
      });
    });
  });


  context('greetAll', function () {

    describe('when array is valid', function () {

      let people;

      beforeEach(() => {
        people = [person, person2];
      });

      it('calls the sayHello method for each element of the array', function () {
        const hi = chai.spy.on(person, 'sayHello');
        const hi2 = chai.spy.on(person2, 'sayHello');
        Person.greetAll(people);
        expect(hi).to.have.been.called.once;
        expect(hi2).to.have.been.called.once;
      });

      it('returns an array of the strings returned by sayHello', function() {
        const greetings = ['Hello Mickey!', "Hello Teal'c!"];
        const greet = Person.greetAll(people);
        expect(greet).to.eql(greetings);
      });
    });


    describe('when array is not valid', function () {

      it('throws an error when array element is not a Person instance', function () {
        const people = [person, person2, 42];
        expect(() => Person.greetAll(people)).to.throw(TypeError, 'elements');
      });
    });
  });



});
