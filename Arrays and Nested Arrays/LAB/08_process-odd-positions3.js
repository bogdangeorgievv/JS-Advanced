function processOddPositions(arr) {
    let result = arr
      .filter((element, index) => index % 2 !== 0)
      .map((element) => element * 2)
      .reverse();
  
    console.log(result.join(" "));
  }
  processOddPositions([10, 15, 20, 25])
