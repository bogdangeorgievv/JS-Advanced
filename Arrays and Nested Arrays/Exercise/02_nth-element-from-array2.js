function getEveryNthElement(arr, n) {
  const result = [];
  arr.forEach((element, index) => {
    if (index % n === 0) {
      result.push(element);
    }
  });
  return result;
}
getEveryNthElement(
  ["5", "20", "31", "4", "20"], 2
);
