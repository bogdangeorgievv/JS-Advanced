function toggle() {
    let buttonTextRef = document.getElementsByClassName('button')[0];
    if(buttonTextRef.textContent == 'More') {
        document.getElementById('extra').style.display = 'block';
        buttonTextRef.textContent = 'Less';
    } else {
        document.getElementById('extra').style.display = 'none';
        buttonTextRef.textContent = 'More'
    }  
}
