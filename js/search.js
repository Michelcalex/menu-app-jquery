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