function solve() {
  let textAreaRef = document.getElementById('input');
  let outputRef = document.getElementById('output');
  let textArea = textAreaRef.value;
  let sentencesArr = textArea.split('.');
  let validSentencesArr = sentencesArr.filter(function(sentence) {
    return sentence.trim().length > 0
  });
  let sentencesCount = validSentencesArr.length;
  let paragraphsCount = Math.ceil(sentencesCount / 3); 
  
  if(sentencesCount <= 3) {
    let newParagraph = document.createElement('p');
    newParagraph.textContent = textArea;
    outputRef.appendChild(newParagraph)
  } else {
    for(let i = 1; i <= paragraphsCount; i++) {
      let newParagraph = document.createElement('p');
      newParagraph.textContent = validSentencesArr.splice(0,3).join('.') + '.';
      outputRef.appendChild(newParagraph);
    }
  }
}
