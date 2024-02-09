function validateEmail() {
    
    let inputElement = document.getElementById('email');
    let input = inputElement.value;
    
    let reg = /^([\w\-.]+)@([a-z]+)(\.[a-z]+)+$/;

    inputElement.addEventListener('change', checkEmail);

    function checkEmail(event) {
        let inputTest = event.target;
        if(reg.test(inputTest.value)) {
            inputTest.classList.remove('error')
            return;
        }
        inputTest.classList.add('error')
    }
}
