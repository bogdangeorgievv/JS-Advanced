function sameNumbers(input) {
    const str = input.toString();
    const sum = str.split('').reduce((acc, num) => acc + Number(num), 0);
    const isSame = new Set(str).size === 1;

    console.log(isSame);
    console.log(sum);
}
sameNumbers(55555)
