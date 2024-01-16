function lastKNumbersSequence(n, k) {
     let result = [1];

     for(let i = 1; i < n; i++) {
          let startIndex = Math.max(0, i - k)
          let element = result.slice(startIndex, startIndex + k).reduce((a, b) => a + b);
          result.push(element)
     }
     console.log(result.join(' '))
}
lastKNumbersSequence(6, 3)
