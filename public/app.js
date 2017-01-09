(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
//display hidden class


let food = require('./food');
let menu = require('./menu');
let search = require('./search');

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
    menu.showMenu(menu.items);
    search.searchBox();
});
},{"./food":2,"./menu":3,"./search":4}],2:[function(require,module,exports){
let menu = require('./menu');

function getFoods() {
    let submitBtn = document.querySelector('#submit-btn');

    submitBtn.addEventListener('click', function() {
        let foodName = document.querySelector('#food-name');
        let foodDescription = document.querySelector('#food-description');
        let foodPrice = document.querySelector('#price');

        let newItem = {
            name: foodName.value[0].toUpperCase() + foodName.value.slice(1).toLowerCase(),
            description: foodDescription.value[0].toUpperCase() + foodDescription.value.slice(1).toLowerCase(),
            price: foodPrice.value,
        };
        
        menu.addItem(newItem);
        menu.showMenu(menu.items);

        foodName.value = '';
        foodDescription.value = '';
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
},{"./menu":3}],3:[function(require,module,exports){
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

},{}],4:[function(require,module,exports){
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
    menu.showMenu(keepers);
});
}




module.exports = {
    searchBox: searchBox,
};
},{"./menu":3}]},{},[1]);
