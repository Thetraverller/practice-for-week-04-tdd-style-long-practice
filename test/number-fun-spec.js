// Your code here

const { expect } = require('chai');

const { returnsThree } = require('../problems/number-fun.js');

const { reciprocal } = require('../problems/number-fun.js');

describe('returnsThree', function () {

  it('returns three', function () {
    const three = returnsThree();
    expect(three).to.equal(3);
  });
});
//--------------------------------------------
describe('reciprocal', function() {

  context('when number is less than 1 and more than 1,000,000', function () {

    it('throws an error', function () {
      expect(() => reciprocal(0.05)).to.throw(TypeError, 'range');
      expect(() => reciprocal(2000000)).to.throw(TypeError, 'range');
      expect(() => reciprocal(0.1)).to.throw(TypeError, 'range');
    });


  });

  context('when number is between 1 and 1,000,000', function () {

    it('returns the reciprocal of the number', function () {
      const rep1 = reciprocal(5);
      const rep2 = reciprocal(8);
      const rep3 = reciprocal(14);

      expect(rep1).to.equal(0.2);
      expect(rep2).to.equal(0.125);
      expect(rep3).to.equal(0.0714);
    });


  });



});
