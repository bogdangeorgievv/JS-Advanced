function solve(arr) {
    let first = Number(arr.shift());
    let last = Number(arr.pop());
    console.log(first + last)
}
solve(['30', '40'])
