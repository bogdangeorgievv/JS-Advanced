import { assert } from "chai";
import { mathEnforcer } from "../04. Math Enforcer/04_math-enforcer.js";

describe("Test addFive", () => {
    it("test with invalid value", () => {
        assert.isUndefined(mathEnforcer.addFive("pesho"), "return value must be undefined")
        assert.equal(mathEnforcer.addFive("pesh"), undefined, "return value must be undefined")
        assert.isUndefined(mathEnforcer.addFive([]), "return value must be undefined")
    })
    it("test with valid value", () => {
        assert.equal(mathEnforcer.addFive(5), "10", "correct result is 10");
        assert.equal(mathEnforcer.addFive(-5), "0", "correct result is 0");
        assert.equal(mathEnforcer.addFive(-10), "-5", "correct result is 10");
        assert.equal(mathEnforcer.addFive(0), "5", "correct result is 5")
        assert.equal(mathEnforcer.addFive(5.5), "10.5", "correct result is 10.5")
    })
})
describe("Test subtractTen", () => {
    it("test with invalid value", () => {
        assert.isUndefined(mathEnforcer.subtractTen("pesho"), "return value must be undefined")
        assert.isUndefined(mathEnforcer.subtractTen([]), "return value must be undefined")
        assert.isUndefined(mathEnforcer.subtractTen("10"), "return value must be undefined")
    })
    it("test with valid value", () => {
        assert.equal(mathEnforcer.subtractTen(5), "-5", "correct result is 10");
        assert.equal(mathEnforcer.subtractTen(-5), "-15", "correct result is 0");
        assert.equal(mathEnforcer.subtractTen(10), "0", "correct result is 10");
        assert.equal(mathEnforcer.subtractTen(0), "-10", "correct result is -10")
        assert.equal(mathEnforcer.subtractTen(15), "5", "correct result is 5")
        assert.equal(mathEnforcer.subtractTen(15.5), "5.5", "correct result is 5.5")
    })
})

describe("Test sum", () => {
    it("test with invalid values", () => {
        assert.isUndefined(mathEnforcer.sum("pesho", "gosho"), "return value must be undefined");
        assert.isUndefined(mathEnforcer.sum(5, "gosho"), "return value must be undefined");
        assert.isUndefined(mathEnforcer.sum("pesho", 5), "return value must be undefined");
        assert.isUndefined(mathEnforcer.sum("pesho", []), "return value must be undefined");
        assert.isUndefined(mathEnforcer.sum("5", 10), "return value must be undefined");
        assert.isUndefined(mathEnforcer.sum(10, "gosho"), "return value must be undefined");
        assert.isUndefined(mathEnforcer.sum(10, "10"), "return value must be undefined");
        assert.isUndefined(mathEnforcer.sum(5, []), "return value must be undefined");
        assert.isUndefined(mathEnforcer.sum([], 5), "return value must be undefined");
        assert.isUndefined(mathEnforcer.sum([], []), "return value must be undefined");
        assert.isUndefined(mathEnforcer.sum('', 5), "return value must be undefined");
        assert.isUndefined(mathEnforcer.sum(5, ''), "return value must be undefined");

    })
    it("test with valid values", () => {
        assert.equal(mathEnforcer.sum(5,5), 10, "correct result is 10")
        assert.equal(mathEnforcer.sum(-5,5), 0, "correct result is 10");
        assert.equal(mathEnforcer.sum(5,-5), 0, "correct result is 10")
        assert.equal(mathEnforcer.sum(10,0), 10, "correct result is 10")
        assert.equal(mathEnforcer.sum(0,0), 0, "correct result is 0");
        assert.equal(mathEnforcer.sum(-10,-5), -15, "correct result is -15")
        assert.equal(mathEnforcer.sum(10.5, 5), 15.5, "correct result is 15.5")
        assert.equal(mathEnforcer.sum(10.5, 5), 15.5, "correct result is 15.5")
        assert.equal(mathEnforcer.sum(10, 5.5), 15.5, "correct result is 15.5")
        assert.equal(mathEnforcer.sum(10.5, 5.5), 16, "correct result is 16")
    })
})
