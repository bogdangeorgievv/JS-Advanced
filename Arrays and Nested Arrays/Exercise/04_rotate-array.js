function rotateArray(arr, n) {
    
    for(let i = 0; i < n; i++) {
        let lastElement = arr.pop();
        arr.unshift(lastElement)
      
    }
    console.log(arr.join(' '))
}
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple'], 15)
