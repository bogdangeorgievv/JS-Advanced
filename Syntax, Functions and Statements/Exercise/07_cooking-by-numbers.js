function cookingByNumbers(input, one, two, three, four, five) {
  
    let initialNumber = Number(input);
    let commandArray = [];
  
    commandArray.push(input)
    commandArray.push(one);
    commandArray.push(two);
    commandArray.push(three);
    commandArray.push(four);
    commandArray.push(five);

    while(commandArray.length > 0) {
        let command = commandArray.shift();
        switch(command) {
            case 'chop':
                initialNumber = initialNumber / 2; 
                console.log(initialNumber);
                break;
            case 'dice':
                initialNumber = Math.sqrt(initialNumber);
                console.log(initialNumber);
                break;
            case 'spice':
                initialNumber = initialNumber + 1;
                console.log(initialNumber);
                break;
            case 'bake':
                initialNumber = initialNumber * 3;
                console.log(initialNumber);
                break;
            case 'fillet':
                initialNumber -= (initialNumber*0.20);
                console.log(initialNumber);
                break;
        }
        
    }
}
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet')
