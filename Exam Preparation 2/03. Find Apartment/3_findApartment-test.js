import { assert } from "chai";
import { findNewApartment } from "./3_findApartment.js";

describe("isGoodLocation", () => {
    it("test with invalid parameters", () => {
        assert.throws(() => findNewApartment.isGoodLocation(5,"pesho")) 
        assert.throws(() => findNewApartment.isGoodLocation("pesho", "pesho")) 
        assert.throws(() => findNewApartment.isGoodLocation(6, true)) 
    })
    it("test with invalid city", () => {
        assert.equal(findNewApartment.isGoodLocation("Shumen", true), "This location is not suitable for you.");
        assert.equal(findNewApartment.isGoodLocation("Shumen", false), "This location is not suitable for you.");
    })
    it("test with invalid false boolean", () => {
        assert.equal(findNewApartment.isGoodLocation("Sofia", false), "There is no public transport in area." );
        assert.equal(findNewApartment.isGoodLocation("Plovdiv", false), "There is no public transport in area." );
        assert.equal(findNewApartment.isGoodLocation("Varna", false), "There is no public transport in area." );
    })
    it("test with valid parameters", () => {
        assert.equal(findNewApartment.isGoodLocation("Sofia", true), "You can go on home tour!");
        assert.equal(findNewApartment.isGoodLocation("Plovdiv", true), "You can go on home tour!");
        assert.equal(findNewApartment.isGoodLocation("Varna", true), "You can go on home tour!");
    })
})

describe("isLargeEnough", () => {
    it("test with invalid parameters", () => {
        assert.throws(() => findNewApartment.isLargeEnough("Pesho", "Gosho"));
        assert.throws(() => findNewApartment.isLargeEnough([], "Pesho"));  
        assert.throws(() => findNewApartment.isLargeEnough(["pesho", "gosho"], "Pesho"));  
        assert.throws(() => findNewApartment.isLargeEnough([], 2));  
        assert.throws(() => findNewApartment.isLargeEnough("Pesho", 2));
        assert.throws(() => findNewApartment.isLargeEnough([50,60], "Gosho"));
        assert.throws(() => findNewApartment.isLargeEnough([50,60], "3"));
    })
    it("test with valid value ", () => {
        let res = [10,20,30];
        assert.equal(findNewApartment.isLargeEnough([1,2,10,20,30], 9), res.join(", ")); 
        assert.equal(findNewApartment.isLargeEnough([1,2,10,20,30], 10), res.join(", ")); 
        assert.equal(findNewApartment.isLargeEnough([1,2,10,20,30], 50), "");  
    })
})
describe("isItAffordable", () => {
    it("test with invalid parameters", () => {
        assert.throws(() => findNewApartment.isItAffordable("pesho", "pesho"));
        assert.throws(() => findNewApartment.isItAffordable(5, "pesho"));
        assert.throws(() => findNewApartment.isItAffordable(0, "pesho"));
        assert.throws(() => findNewApartment.isItAffordable(-5, "pesho"));
        assert.throws(() => findNewApartment.isItAffordable("pesho", 5));
        assert.throws(() => findNewApartment.isItAffordable("pesho", 0));
        assert.throws(() => findNewApartment.isItAffordable("pesho", -5));
    })
    it("test with 0 or below", () => {
        assert.throws(() => findNewApartment.isItAffordable(0, 0))
        assert.throws(() => findNewApartment.isItAffordable(0, 1))
        assert.throws(() => findNewApartment.isItAffordable(1, 0))
        assert.throws(() => findNewApartment.isItAffordable(-1, 0))
        assert.throws(() => findNewApartment.isItAffordable(0, -1))
        assert.throws(() => findNewApartment.isItAffordable(-1, -1))
    })
    it("should return afford", () => {
        let price = 50000;
        let budget = 70000;
        assert.equal(findNewApartment.isItAffordable(price, budget), "You can afford this home!");
    })
    it("should return can not afford", () => {
        let price = 50000;
        let budget = 30000;
        assert.equal(findNewApartment.isItAffordable(price, budget), "You don't have enough money for this house!");
    })
})
