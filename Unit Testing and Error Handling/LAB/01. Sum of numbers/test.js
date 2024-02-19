import { expect } from 'chai'
import { sum } from './solution.js'

describe('Suite', function() {
    it("works with numbers array", function () {
        const arr = [1,1,1];

        expect(sum(arr)).to.equal(3);
    });

    it('throws an error for non-array param', () => {
        expect(() => sum(1)).to.throw();   

    });

    it("returns 0 for empty array", () => {
        const arr = [];

        expect (sum(arr)).to.equal(0);
    });
    it("returns 1 or array with one element", () => {
        const arr = [1];

        expect (sum(arr)).to.equal(1);
    });
});

