function smallestTwoNumbers(arr) {
  
  arr.sort((a, b) => a - b);
  let result = [];
  result.push(arr[0]);
  result.push(arr[1]);
  console.log(result.join(' '))
    
  }
smallestTwoNumbers([30, 15, 50, 5])
