function attachEventsListeners() {
    const buttons = Array.from(document.querySelectorAll("input[type='button']"))
    
    for(let button of buttons) {
        button.addEventListener('click', convertHandler) 
    }

    function convertHandler(event) {
        let currentUnitInput = event.currentTarget.parentElement.children[1];
        let value = Number(currentUnitInput.value)
        let unit = currentUnitInput.id;
        switch(unit) {
            case "days": propagateNewValue(value); break;
            case "hours": propagateNewValue(value / 24); break;
            case "minutes": propagateNewValue(value / 24 / 60); break;
            case "seconds": propagateNewValue(value / 24 / 60 / 60); break;
        }
    }
    function propagateNewValue(days) {  //искаме да получаваме дни само, една ст-ст, от която да правим другите
        let inputs = document.querySelectorAll("input[type='text']");
        inputs[0].value = days;
        inputs[1].value = days * 24;
        inputs[2].value = days * 24 * 60;
        inputs[3].value = days * 24 * 60 * 60;        
    }
}
