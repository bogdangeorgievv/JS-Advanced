function focused() {

    let mainDiv = document.getElementsByTagName('div')[0];

    Array.from(mainDiv.getElementsByTagName('input')).forEach(element => {
        element.addEventListener('focus', focus);
    });

    Array.from(mainDiv.getElementsByTagName('input')).forEach(element => {
        element.addEventListener('blur', lostFocus);
    });

    function focus(e) {
        let parent = e.target.parentNode;
        parent.classList.add('focused')
    }

    function lostFocus(e) {
        let parent = e.target.parentNode;
        parent.classList.remove('focused')
    }

 }
