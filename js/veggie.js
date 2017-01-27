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