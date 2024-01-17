function processOddPositions(arr) {
    let result = [];
    for(let i = 1; i < arr.length; i+=2) {
      result.push(arr[i]);
    }
      let finalResult = result.map(num => num * 2).reverse();
      console.log(finalResult.join(' '))
  }
  processOddPositions([10, 15, 20, 25])
