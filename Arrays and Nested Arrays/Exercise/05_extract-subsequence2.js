function solve(arr) {
    let biggestElement = arr.shift();
    let result = [];
    result.push(biggestElement);

    arr.forEach(x => {
        if(biggestElement <= x) {
            biggestElement = x;
            result.push(biggestElement)
        }
    });
    return result;
}
solve([1, 3, 8, 4, 10, 12, 3, 2, 24])
