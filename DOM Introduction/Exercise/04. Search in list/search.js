function search() {

   let searchInputRef = document.getElementById('searchText');
   let resultRef = document.getElementById('result');
   let searchText = searchInputRef.value;
   let towns = Array.from(document.querySelectorAll('ul li'));
   let matches = 0;

   for(let town of towns) {
      town.style.fontWeight = 'none';
      town.style.textDecoration = 'none';
   }

   for(let town of towns) {
      if(town.textContent.includes(searchText)) {
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
         matches++;
      } 
   }
   searchInputRef.value = '';
   resultRef.textContent = `${matches} matches found`
   
}
 
