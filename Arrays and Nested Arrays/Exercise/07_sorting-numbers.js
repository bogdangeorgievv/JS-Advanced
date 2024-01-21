function sortingNumbers(arr) {
    let result = [];
    arr.sort((a,b) => a - b) 
    
    for(let i = 0; i < Math.floor(arr.length / 2); i++) {
        result.push(arr[i]);
        result.push(arr[arr.length - (i + 1)])
        if(arr.length % 2 !== 0 && i + 1 == Math.floor(arr.length / 2)) {
            result.push(arr[arr.length - (i + 2)]);
        }
    }
    return result;
}
sortingNumbers([22, 9, 63, 3, 2, 19, 54, 11, 21, 18])
