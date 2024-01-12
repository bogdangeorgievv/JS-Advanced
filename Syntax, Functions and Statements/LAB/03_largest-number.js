function solve(...rest) {
    let maxNum = Math.max(...rest);
    console.log(`The largest number is ${maxNum}.`)
}
solve(5, -3, 16, 6, 18)
