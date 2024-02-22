import { assert } from "chai";
import { lookupChar } from "../03. Char Lookup/03_char-lookup.js";

describe("Suite", () => {
    it("valid values", () => {
        assert.equal(lookupChar("Pesho", 3), "h", "correct result");
        assert.equal(lookupChar("Pesho", 0), "P", "correct result");
        assert.equal(lookupChar("Pesho", 4), "o", "correct result");
    })
    it("invalid index", () => {
        assert.equal(lookupChar("Pesho", -1), "Incorrect index", "invalid index");
        assert.equal(lookupChar("Pesho", 5), "Incorrect index", "invalid index");
        assert.equal(lookupChar("Pesho", -5), "Incorrect index", "invalid index")
        assert.equal(lookupChar("", 2), "Incorrect index", "invalid index")
    })
    it("undefined", () => {
        assert.equal(lookupChar("Pesho", -5.1), undefined, "invalid value")
        assert.equal(lookupChar("Pesho", 5.5), undefined, "invalid value")
        assert.equal(lookupChar("Pesho", 2.3), undefined, "invalid value")
        assert.equal(lookupChar([1,2], 2), undefined, "invalid value")
        assert.equal(lookupChar([], 2), undefined, "invalid value")
        assert.equal(lookupChar({a: 'pesho'}, 2), undefined, "invalid value")
    })
})
