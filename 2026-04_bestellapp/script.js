const dishesInBasket = [];

function init() {
    renderAllDishContainer()
}

function renderAllDishContainer() {
    for (let indexDish = 0; indexDish < allDishes.length; indexDish++) {

        const category = allDishes[indexDish].category;
        const name = allDishes[indexDish].name;
        const imageFilename = allDishes[indexDish].imageFilename;
        const description = allDishes[indexDish].description;
        const price = allDishes[indexDish].price.toFixed(2).toString().replace(".", ",") + " €";

        const dishContainerRef = document.getElementById('#Container' + category);
        dishContainerRef.innerHTML += templateDishContainer(indexDish, name, imageFilename, description, price);
    }
}

function addToBasket(indexDish) {
    
    const choosenDish = {};
    choosenDish.indexDish = indexDish;
    choosenDish.amount = 1;

    dishesInBasket.push(choosenDish);
    console.table(dishesInBasket);

    // let amount = 2;

    // const basketPrice = (amount * allDishes[indexDish].price).toFixed(2).toString().replace(".", ",") + " €";

    
}

// function renderBasket(params) {
//     const choosenDishesRef = document.getElementById('#ContainerChoosenDishes');
//     choosenDishesRef.innerHTML += templateDishCartInBasket(name, amount, basketPrice);
// }