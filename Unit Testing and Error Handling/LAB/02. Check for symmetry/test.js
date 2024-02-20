import { expect } from 'chai'
import { isSymmetric } from './solution.js'

describe('Suite', function () {
    it('works', () => {
        const arr = [1,2,1];
        expect(isSymmetric(arr)).to.equal(true)
    })
    it('should return false when given non Symmetric arr', () => {
        const arr = [1,2,3,4,5];
        expect(isSymmetric(arr)).to.equal(false)
    })
    it('should return true if given arr of 1 num', () => {
        expect(isSymmetric([1])).to.equal(true)
    })
    it("should return false for 1,2,2,1", function () {
        expect (isSymmetric(1,2,2,1)).to.be.equal(false);
    });
    it("should return false for [-1,2,1]", function () {
        expect(isSymmetric([-1,2,1])).to.be.equal(false);
    });
    it("should return true for [5,'hi',{a:5},new Date(),{a:5},'hi',5]", function () {
        expect(isSymmetric([5,'hi',{a:5},new Date(),{a:5},'hi',5])).to.be.equal(true);
    });
})
