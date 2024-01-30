function extract(content) {
    let contentEl = document.getElementById('content').textContent;
    let pattern = /\(([^)]+)\)/g;
    let result = [];

    let match = pattern.exec(contentEl);
    while(match) {
        result.push(match[1]);
        match = pattern.exec(contentEl);

    }
    return result.join('; ') 
}
