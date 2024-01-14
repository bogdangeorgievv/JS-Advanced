function sameNumbers(input) {
    let str = input.toString();
    let sum = 0;
    for(let num of str) {
        sum += Number(num)
    }
    let isSame = true;
    for(let i = 0; i < str.length - 1; i++) {
        let num = Number(str[i]);
        let rightNum = Number(str[i+1]);
        if(num !== rightNum) {
            isSame = false;
            break;
        } 
    }
    console.log(isSame)
    console.log(sum)
}
sameNumbers(2222222)
