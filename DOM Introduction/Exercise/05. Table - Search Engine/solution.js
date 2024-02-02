function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   const tableRows = Array.from(document.querySelectorAll('tbody tr'));
   const searchInputRef = document.getElementById('searchField');
   function onClick() {
      let searchText = searchInputRef.value;
      for(let tableRow of tableRows) {
         let tableData = Array.from(tableRow.querySelectorAll('td'));
         for(let data of tableData) {
            if(data.textContent.includes(searchText)) {
               tableRow.classList.add('select');
               break; //if match is found, move to next row
            } else { 
               tableRow.classList.remove('select');
            }
         } 
      }
         searchInputRef.value = '';
   }
}
