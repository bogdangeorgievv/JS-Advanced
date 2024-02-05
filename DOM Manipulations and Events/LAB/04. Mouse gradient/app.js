function attachGradientEvents() {
    let gradient = document.getElementById('gradient');
    gradient.addEventListener('mousemove', gradientMove);
    gradient.addEventListener('mouseout', gradientOut);
 
    function gradientMove(event) {
        const gradientBoxWidth = event.target.clientWidth; //clientWidth е променлива, която ще ни каже колко е широк елемента
        //на какво разстояние от левия край на елемента, потребителя е поставил мишката
        const positionOfTheMouse = event.offsetX / (gradientBoxWidth - 1) 
        const percentage = Math.trunc(positionOfTheMouse * 100);
        document.getElementById('result').textContent = percentage + '%'
        
    }
    function gradientOut() {
        document.getElementById('result').textContent = '';
    }

}
