function solve(n, m) {
    let firstnum = Number(n);
    let secondnum = Number(m);
    let sum = 0;

    for(let i = firstnum; i <= secondnum; i++) {
        sum += i;
    }
    return sum;
}
solve('1', '5')
