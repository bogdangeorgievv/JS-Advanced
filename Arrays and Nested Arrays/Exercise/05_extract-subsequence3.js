function solve(arr) {
    let biggestOne = -Infinity;

    return arr.reduce((acc, el) => {
        if(el >= biggestOne) {
            biggestOne = el;
            acc.push(biggestOne)
        }
        return acc
    }, [])
}
solve([1, 3, 8, 4, 10, 12, 3, 2, 24])
