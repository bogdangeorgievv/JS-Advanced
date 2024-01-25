function townsToJSON(data) {
    
    let result = [];

    for(const line of data.splice(1)) {
        let tokens = line.split('|').map(x=> x.trim()).filter(x => !!x);
        result.push({
            Town: tokens[0],
            Latitude: +Number(tokens[1]).toFixed(2),
            Longitude: +Number(tokens[2]).toFixed(2)
        })
    }
    console.log(JSON.stringify(result))
    
}
townsToJSON([
'| Town | Latitude | Longitude |',

'| Sofia | 42.696552 | 23.32601 |',

'| Beijing | 39.913818 | 116.363625 |'
])
