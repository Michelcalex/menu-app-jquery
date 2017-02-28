let items = [
    {name: 'Cheese Pizza', description: 'Dangerously cheezy', category: 'italian', price: 10.99},
    {name: 'Chicken Noodle Soup', description: 'With a soda on the side', category: 'liquids', price: 5.99},
    {name: 'Oh My Taco', description: 'Black bean and salsa tacos', category: 'mexican', price: 7.99}
];

function showMenu(param, selector) {
    let menuList = document.querySelector(selector);
    menuList.innerHTML='';
    
    for (let i = 0; i < param.length; i++) {
        let item = document.createElement('li');
        item.innerHTML = Mustache.render (
            document.querySelector('#food-list-template').innerHTML, 
            {
                name: param[i].name, 
                description: param[i].description,
                category: param[i].category,
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
