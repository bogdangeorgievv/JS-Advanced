function townPopulation(arrOfStrings) {
    let result = {};

    for(let town of arrOfStrings) {
        let tokens = town.split(' <-> ');
        let name = tokens.shift();
        let population = Number(tokens.shift());

        if(result.hasOwnProperty(name)) {  
            result[name] += population;
        } else {
            result[name] = population;
        }
    }
    for(let name in result) {
        console.log(name, ':', result[name])
    }
}
townPopulation(['Sofia <-> 1200000',

'Montana <-> 20000',

'New York <-> 10000000',

'Washington <-> 2345000',

'Las Vegas <-> 1000000'])
