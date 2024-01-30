function solve() {
  const resultRef = document.getElementById('result');
  let textValue = document.getElementById('text').value;
  let convention = document.getElementById('naming-convention').value;
  let result = '';

  switch(convention) {
    case "Camel Case":
      textArr = textValue.split(" ");
      result = textArr.shift().toLowerCase();
      textArr.forEach(word => {
        result += word[0].toUpperCase() + word.substring(1).toLowerCase();
      });
      break;
    case "Pascal Case":
      textArr = textValue.split(" ");
      textArr.forEach(word => {
        result += word[0].toUpperCase() + word.substring(1).toLowerCase();
      });
      break;
    default:
      result = 'Error!'
  }
  resultRef.textContent = result;

}
