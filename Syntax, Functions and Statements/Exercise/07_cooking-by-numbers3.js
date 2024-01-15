function cookingByNumbers(numAsString, ...commands) {

    let num = Number(numAsString);
  
    let applyCommand = {
        chop: (num) => {return num / 2},
        dice: (num) => {return Math.sqrt(num)},
        spice: (num) => {return num + 1},
        bake: (num) => {return num * 3},
        fillet: (num) => {return num - (num * 0.2)}
    }

    commands.forEach(el => {
        num = applyCommand[el](num);
        console.log(num);
    })
}
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet')
