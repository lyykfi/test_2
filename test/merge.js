const { mergeArrays } = require('../src/merge');
const { expect } = require('chai');

it('test merge case 1', function(done) {
    const result = mergeArrays([1,4,6], [2,3,5]);
    console.log(result);

    expect(result).to.eql([1, 2, 3, 4, 5, 6]);
    done();
});

it('test merge case 2', function(done) {
    const result = mergeArrays([1, 6, 7, 10], [2, 3, 4, 5, 8, 11]);
    console.log(result);

    expect(result).to.eql([ 1, 2, 3, 4, 5, 6, 7, 8, 10, 11 ]);
    done();
});