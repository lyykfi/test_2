const { getSumFib } = require('../src/fib');
const { expect } = require('chai');

it('get fib number', function(done) {
    expect(getSumFib(100)).to.equal(354224848179261800000);
    done();
});