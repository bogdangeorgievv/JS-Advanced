import {assert} from "chai"
import {isOddOrEven} from "../02. Is Odd or Even/02_isOddOrEven.js" //едно назад с ..

describe("isOddOrEven", () => {
    it("test with non string value", () => {
        assert.equal(isOddOrEven({prop: "Pesho"}), undefined, "return type must be undefined");
        assert.equal(isOddOrEven(5), undefined , "return type must be undefined");
        assert.isNotOk(isOddOrEven([]), "return type must be undefined") //очаква да върне true ili false, undefined e false i zatova nishto ne pishem      
    })
    it("test with valid string value", () => {
        assert.equal(isOddOrEven('Pesho'), "odd", "result is correct (odd)");
        assert.equal(isOddOrEven("goshoo"), "even", "result is correct (even)")
    })
    it("test with empty string", () => {
        assert.equal(isOddOrEven(""),"even", "result is correct (even)")
    })
})
