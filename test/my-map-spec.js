// Your code here

const chai = require('chai')
    , spies = require('chai-spies');
chai.use(spies);

const expect = chai.expect;

const myMap = require('../problems/my-map');

describe('myMap', function () {

  let arr;

  beforeEach(() => {
    arr = [1, 2, 3, 4];
  });

  it('should not mutate the original array', function() {
    myMap(arr, (n) => n * 2);
    expect(arr).to.eql([1, 2, 3, 4]);
  });

  it('should not use the Array.map method', function () {
    const map = chai.spy.on(arr, 'map');

    myMap(arr, (n) => n ** n);
    expect(map).to.not.have.been.called();
  });

  it('calls the callback for each element of the array', function () {
    const multiplyByFive = n => n * 5;
    const cb = chai.spy(multiplyByFive);
    const len = arr.length;

    myMap(arr, cb);
    expect(cb).to.have.been.called.exactly(len);
  })


});
