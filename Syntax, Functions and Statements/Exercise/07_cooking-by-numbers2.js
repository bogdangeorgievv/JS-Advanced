function cookingByNumbers(input, ...commands) {
  
    let initialNumber = Number(input);

    function applyCommand(command) {    
        switch (command) {
            case 'chop':
                initialNumber /= 2;
                break;
            case 'dice':
                initialNumber = Math.sqrt(initialNumber);
                break;
            case 'spice':
                initialNumber += 1;
                break;
            case 'bake':
                initialNumber *= 3;
                break;
            case 'fillet':
                initialNumber -= (initialNumber * 0.20);
                break;
        }
        console.log(initialNumber);
    };

    commands.forEach(applyCommand);
}

cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
