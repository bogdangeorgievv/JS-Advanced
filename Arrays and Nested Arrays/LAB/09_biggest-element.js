function biggestElement(matrix) {
    let max = -Infinity;
  
    for(let element of matrix) {
      for(let num of element) {
        if(num > max) {
          max = num
        }
      }
    }
    console.log(max)
  }
  biggestElement([[20, 50, 10],

    [8, 33, 145]])
