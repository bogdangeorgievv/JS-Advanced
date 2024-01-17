function processOddPositions(arr) {
    const finalResult = arr
      .filter((_, index) => index % 2 !== 0)
      .map(num => num * 2)
      .reverse();
  
    console.log(finalResult.join(' '));
  }
  processOddPositions([10, 15, 20, 25])
