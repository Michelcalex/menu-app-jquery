(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
//display hidden class


let food = require('./food');
let menu = require('./menu');
let search = require('./search');
let veggie = require('./veggie');

window.addEventListener('load', function() {
    console.log('I am working');

    $('#tabs').tabs();

    

    // let addFoodBtn = document.querySelector('#add-food');
    // let viewMenuBtn = document.querySelector('#view-menu');
    // let createMenuSection = document.querySelector('#create-menu');
    // let showMenuSection = document.querySelector('#show-menu');


    // addFoodBtn.addEventListener('click', function() {
    //     createMenuSection.className = '';
    //     showMenuSection.classList.add('hidden');
    // });

    // viewMenuBtn.addEventListener('click', function() {
    //     showMenuSection.className = '';
    //     createMenuSection.classList.add('hidden');
    // });

    food.getFoods();
    menu.showMenu(menu.items, '#menu-list');
    search.searchBox();
    veggie.showVeggies();
});
},{"./food":2,"./menu":3,"./search":4,"./veggie":5}],2:[function(require,module,exports){
let menu = require('./menu');
let veggie = require('./veggie');


function getFoods() {
    let submitBtn = document.querySelector('#submit-btn');

    submitBtn.addEventListener('click', function() {
        let foodName = document.querySelector('#food-name');
        let foodDescription = document.querySelector('#food-description');
        let foodCategory = document.querySelector('#category');
        let foodPrice = document.querySelector('#price');

        let newItem = {
            name: foodName.value[0].toUpperCase() + foodName.value.slice(1).toLowerCase(),
            description: foodDescription.value[0].toUpperCase() + foodDescription.value.slice(1).toLowerCase(),
            category: foodCategory.value[0].toUpperCase() + foodCategory.value.slice(1).toLowerCase(),
            price: foodPrice.value,
        };
        
        menu.addItem(newItem);
        menu.showMenu(menu.items, '#menu-list');
        veggie.showVeggies();

        foodName.value = '';
        foodDescription.value = '';
        foodCategory.value = '';
        foodPrice.value = '';
    });
}

module.exports = {
    getFoods: getFoods,
};


// ***********Manipulating DOM 
// function getFoods() {
//     let submitBtn = document.querySelector('#submit-btn');

//     submitBtn.addEventListener('click', function() {

//         let menuList = document.querySelector('#menu-list');

//         let foodName = document.querySelector('#food-name');
//         let foodItem = document.createElement('li');
//         foodItem.textContent = 'Name: ' + foodName.value;
//         menuList.appendChild(foodItem);

//         let foodDescription = document.querySelector('#food-description');
//         let descriptionItem = document.createElement('li');
//         descriptionItem.textContent = 'Description: ' + foodDescription.value;
//         menuList.appendChild(descriptionItem);

//         let foodPrice = document.querySelector('#price');
//         let priceItem = document.createElement('li');
//         priceItem.textContent = 'Price: ' + foodPrice.value;
//         menuList.appendChild(priceItem);

//         foodName.value= '';
//         foodDescription.value= '';
//         foodPrice.value= '';
//     });
// }
},{"./menu":3,"./veggie":5}],3:[function(require,module,exports){
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

},{}],4:[function(require,module,exports){
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
},{"./menu":3}],5:[function(require,module,exports){
//STEPS:
//Iterate through menu items
//if the category is 'vegetarian', push to a new array
//display new array in DOM


let menu = require('./menu');


// let veggieFood = [
//     {name: 'Spinach Enchiladas', description: 'really delicious', category: 'vegetarian', price: 4.59},
//     {name: 'Homemade Veggie Pizza', description: 'really delicious', category: 'vegetarian', price: 4.59},
//     {name: 'Amazing Simple Thai Tofu', description: 'really delicious', category: 'vegetarian', price: 4.59},
// ]



function showVeggies() {
    let veggieItem = document.querySelector('#veggie-list');

    let veggieFood = menu.items.filter(function(food) {
        if(food.category === 'Vegetarian') {
            return true;
        } else {
            return false;
        }
    });

    //Good ole for loop
    // for(let i = 0; i <menu.items.length; i++) {
    //     if(menu.items[i].category === 'vegetarian') {
    //         veggieFood.push(menu.items[i]);
    //     }
    // }

    menu.showMenu(veggieFood, '#veggie-list');
    

}




module.exports = {
    showVeggies: showVeggies,
};
},{"./menu":3}]},{},[1]);
