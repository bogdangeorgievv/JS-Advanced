function solve(a, b) {
    let startNum = Math.min(a, b);
    let GCD = 1;
    for(let i = startNum; i > 1; i--) {
        if(a % i === 0 && b % i === 0) {
            GCD = i;
            break;
        }
    }
    console.log(GCD)
}
solve(2154, 458)
