let items = [];

function showMenu(param) {
    let menuList = document.querySelector('#menu-list');
    menuList.innerHTML='';
    
    for (let i = 0; i < param.length; i++) {
        let item = document.createElement('li');
        item.innerHTML = Mustache.render (
            document.querySelector('#food-list-template').innerHTML, 
            {
                name: param[i].name, 
                description: param[i].description,
                price: param[i].price,
            }
        );

        menuList.appendChild(item);
    }
}

function addItem(itemToAdd) {
    items.push(itemToAdd);
}

module.exports = {
    items: items,
    addItem: addItem,
    showMenu: showMenu
};
