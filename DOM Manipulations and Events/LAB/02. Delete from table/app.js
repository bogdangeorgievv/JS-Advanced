function deleteByEmail() {

    let input = document.querySelector('[name="email"]') //като няма ID, използваме querySelector и в [] пишем атрибут name 
    let rows = document.querySelectorAll('#customers tbody tr');

    let success = false;

    const rowArray = Array.from(rows);
    for(let row of rowArray) {
        if(row.children[1].textContent == input.value) { //защото ни интересува само втората колонка, а не целия ред.
            row.remove();
            success = true;
            input.value = '';
        } 
    }

    const output = document.getElementById('result');
    if(success) {
        output.textContent = 'Deleted.'
    } else {
        output.textContent = 'Not found.'
    }
    
} 
