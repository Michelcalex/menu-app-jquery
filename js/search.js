// Steps:
// *pt 1: whenever someone types in the text box* - look into the 'keyup' event
// *pt 2: figure out which elements 'match'* - look through your array, and filter 
//        (literally or figuratively) to a subset of the items where the string in the text box is 
//        present in the food's name. you can find if a string exists in another string using `indexOf` 
//        or `includes`
// *pt 3: render a subset of the foods* - i'd suggest clearing out all foods from the DOM and re-rendering 
//        using the array from pt 2 (NOT the full array - then nothing hides!)

let menu = require('./menu');


function searchBox() {
    let searchBar = document.querySelector('#search-bar');

    searchBar.addEventListener('keyup', function() {
    let keepers = [];

    for(let i = 0;i < menu.items.length; i++) {
        let foodName = menu.items[i].name.toLowerCase();
        let searchTerm = searchBar.value.toLowerCase();
        
        if(foodName.includes(searchTerm)) {
            keepers.push(menu.items[i]);
        }
    }
    menu.showMenu(keepers, '#menu-list');
});
}




module.exports = {
    searchBox: searchBox,
};