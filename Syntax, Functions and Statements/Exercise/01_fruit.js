function solve(fruit, weight, price) {
  let kilograms = weight / 1000;
  let totalPrice = kilograms * price;
  console.log(
    `I need $${totalPrice.toFixed(2)} to buy ${kilograms.toFixed(
      2
    )} kilograms ${fruit}.`
  );
}
solve("orange", 2500, 1.8);
solve("apple", 1563, 2.35);
