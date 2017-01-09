let menu = require('./menu');

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
        menu.showMenu(menu.items);

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