const dishesInBasket = {"dishes":[], "amounts":[]};
const DIALOG_REF_BASKET = document.getElementById('#BasketDialog');

function init() {
    renderAllDishContainer();
    renderBasket();
    document.getElementById('#BasketDialog').showModal();
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

function renderBasket() {
    (dishesInBasket.dishes > 0) ? renderFilledBasket() : renderEmptyBasket();
}

function renderEmptyBasket() {
    document.getElementById('#BasketAside').innerHTML = templateEmptyBasket();
    document.getElementById('#BasketDialog').innerHTML = templateEmptyBasket();
}

function renderFilledBasket() {
    document.getElementById('#BasketAside').innerHTML = templateFilledBasket();
    document.getElementById('#BasketDialog').innerHTML = templateFilledBasket();

}

function renderDishesInBasket(indexDish) {
    let subtotal = 0;
    const choosenDishesRef = document.getElementById('#ContainerChoosenDishes');
    choosenDishesRef.innerHTML = "";
    for (let indexBasket = 0; indexBasket < dishesInBasket.dishes.length; indexBasket++) {
        const indexDish = dishesInBasket.dishes[indexBasket];
        const amount = dishesInBasket.amounts[indexBasket];
        const name = allDishes[indexDish].name;
        const basketPrice = (amount * allDishes[indexDish].price);

        subtotal += basketPrice;
        choosenDishesRef.innerHTML += templateDishCartInBasket(indexDish, name, amount, basketPrice.toFixed(2).toString().replace(".", ",") + " €");
    }

    renderMoneyCalculation(subtotal);
}

function renderMoneyCalculation(subtotal) {
    const deliveryFee = 4.99;
    const total = (subtotal + deliveryFee).toFixed(2).toString().replace(".", ",") + " €";

    document.getElementById('#Subtotal').innerHTML = subtotal.toFixed(2).toString().replace(".", ",") + " €";
    document.getElementById('#DeliveryFee').innerHTML = deliveryFee.toFixed(2).toString().replace(".", ",") + " €";
    document.getElementById('#Total').innerHTML = total;
    document.getElementById('#BuyNow').innerHTML = `Buy now (${total})`
}

function addToBasket(indexDish) {
    if (!dishesInBasket.dishes.includes(indexDish)) {
        dishesInBasket.dishes.push(indexDish);
        dishesInBasket.amounts.push(1);
    } else {
        const i = dishesInBasket.dishes.indexOf(indexDish);
        dishesInBasket.amounts[i] += 1;
    }

    renderFilledBasket();
    renderDishesInBasket(indexDish);
}

function deleteFromBasket(indexDish) {
    const i = dishesInBasket.dishes.indexOf(indexDish);

    if (dishesInBasket.amounts[i] == 1) {
        dishesInBasket.dishes.splice(i, 1);
        dishesInBasket.amounts.splice(i, 1);
    } else {
        dishesInBasket.amounts[i] -= 1;
    }
    
    renderBasket();
    renderDishesInBasket(indexDish);
}