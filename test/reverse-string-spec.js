// Your code here


const chai = require('chai');
const expect = chai.expect;

const reverseString = require('../problems/reverse-string.js');

describe(`reverseString`, function() {
    it('should reverse the string', function() {
        expect(reverseString(`fun`)).to.equal('nuf')             //entered string in test function and set to equal nuf
    });

    it(`should throw an error when argument is not a string`, function() {
        expect(() => reverseString(0987)).throw()  /// entered nonstring in the test function
    })
})
