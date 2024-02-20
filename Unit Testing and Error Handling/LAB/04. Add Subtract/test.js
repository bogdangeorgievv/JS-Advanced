function createCalculator() {
  let value = 0;
  return {
    add: function (num) {
      value += Number(num);
    },
    subtract: function (num) {
      value -= Number(num);
    },
    get: function () {
      return value;
    },
  };
}
const calculator = createCalculator();
calculator.add(2);
calculator.add(3);
console.log(calculator.get())

export { createCalculator }
