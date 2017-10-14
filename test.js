const expect = require('chai').expect;
const lcs = require('./index');

describe('find Longest Increasing Subsequence', () => {
    let array = [1,9,5,13,3,11,7,15,2,10,6,14,4,12,8,16];
    let correctArray = [1, 3, 7, 10, 12, 16 ];
    let result = lcs.findLis(array);
    it('should return correct array', () => {
        expect(result.length).to.equal(6);
        expect(result).deep.equal(correctArray);

    });
});