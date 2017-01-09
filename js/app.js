//display hidden class


let food = require('./food');
let menu = require('./menu');
let search = require('./search');

window.addEventListener('load', function() {
    console.log('I am working');

    $('#tabs').tabs({
        active: 0
        }
    );

    

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