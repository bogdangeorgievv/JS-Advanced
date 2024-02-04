function addItem() {
    const input = document.getElementById("newItemText");
    const text = input.value; 
    if(text.length == 0) {
        return;
    }
    const li = document.createElement('li');
    li.textContent = text;  
    const list = document.getElementById('items');
    list.appendChild(li)
    input.value = '';
}
