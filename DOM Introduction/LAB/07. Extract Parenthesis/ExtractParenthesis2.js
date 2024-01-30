let text = extract("content");
console.log(text)   
function extract(id) {
    let regex = /\(([^)]+)/g;
    let content = document.getElementById(id).textContent;
    let matches = [];
    let match = '';
    while(match = regex.exec(content)) {
        matches.push(match[1])
    } 
    return matches.join('; ')
}
