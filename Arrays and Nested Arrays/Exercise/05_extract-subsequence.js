function solve(arr) {
    let biggestElement = arr.shift();
    let result = [];
    result.push(biggestElement);

    for(let i = 0; i < arr.length; i++) {
        if(biggestElement <= arr[i]) {
            biggestElement = arr[i];
            result.push(biggestElement)
        }
    }
    return result;
}
solve([1, 3, 8, 4, 10, 12, 3, 2, 24])
