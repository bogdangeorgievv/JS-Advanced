function solve(input) {
    let sum = 0;
    for(let num of input) {
        sum += num;
    }
    console.log(sum)

    let sumInverse = 0;
    for(let num of input) {
        sumInverse += 1/num
    }
    console.log(sumInverse)

    let concat = '';
    for(let num of input) {
        concat += num.toString();
    }
    console.log(concat)
}
solve([2, 4, 8, 16])
