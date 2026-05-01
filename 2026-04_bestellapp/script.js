const dishesInBasket = {"dishes":[], "amounts":[]};
const DIALOG_REF_BASKET = document.getElementById('#BasketDialog');

function init() {
    renderAllDishContainer();
    renderEmptyBasket();
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
    (dishesInBasket.dishes.length == 0) ? renderEmptyBasket() : renderFilledBasket();
}

function renderEmptyBasket() {
    document.getElementById('#ShoppingCart').classList.remove("dishes-added-to-basket");
    document.getElementById('#AmountDishes').classList.add("d-none");
    document.getElementById('#BasketAside').innerHTML = templateEmptyBasket();
    document.getElementById('#BasketDialog').innerHTML = templateEmptyBasket();
}

function renderFilledBasket() {
    renderShoppingCartIcon();
    document.getElementById('#BasketAside').innerHTML = templateFilledBasket('Aside');
    document.getElementById('#BasketDialog').innerHTML = templateFilledBasket('Dialog');
    renderDishesInBasket('Aside');
    renderDishesInBasket('Dialog');
}

function renderShoppingCartIcon() {
    const amountDishes = dishesInBasket.amounts.reduce((accumulator, currentValue) => accumulator + currentValue,);
    document.getElementById('#ShoppingCart').classList.add("dishes-added-to-basket");
    document.getElementById('#AmountDishes').classList.remove("d-none");
    document.getElementById('#AmountDishes').innerHTML = amountDishes;
}

function renderDishesInBasket(position) {
    let subtotal = 0;
    const choosenDishesRef = document.getElementById(`#ContainerChoosenDishes${position}`);
    choosenDishesRef.innerHTML = "";
    for (let indexBasket = 0; indexBasket < dishesInBasket.dishes.length; indexBasket++) {
        const indexDish = dishesInBasket.dishes[indexBasket];
        const amount = dishesInBasket.amounts[indexBasket];
        const name = allDishes[indexDish].name;
        const basketPrice = (amount * allDishes[indexDish].price);

        subtotal += basketPrice;
        choosenDishesRef.innerHTML += templateDishCartInBasket(indexDish, name, amount, basketPrice.toFixed(2).toString().replace(".", ",") + " €");
    }

    renderMoneyCalculation(position, subtotal);
}

function renderMoneyCalculation(position, subtotal) {
    const deliveryFee = 4.99;
    const total = (subtotal + deliveryFee).toFixed(2).toString().replace(".", ",") + " €";

    document.getElementById(`#Subtotal${position}`).innerHTML = subtotal.toFixed(2).toString().replace(".", ",") + " €";
    document.getElementById(`#DeliveryFee${position}`).innerHTML = deliveryFee.toFixed(2).toString().replace(".", ",") + " €";
    document.getElementById(`#Total${position}`).innerHTML = total;
    document.getElementById(`#BuyNow${position}`).innerHTML = `Buy now (${total})`
}

function addToBasket(indexDish) {
    if (!dishesInBasket.dishes.includes(indexDish)) {
        dishesInBasket.dishes.push(indexDish);
        dishesInBasket.amounts.push(1);
    } else {
        const i = dishesInBasket.dishes.indexOf(indexDish);
        dishesInBasket.amounts[i] += 1;
    }

    changeAddButton(indexDish);
    renderFilledBasket();
}

function deleteOneFromBasket(indexDish) {
    const i = dishesInBasket.dishes.indexOf(indexDish);

    if (dishesInBasket.amounts[i] == 1) {
        dishesInBasket.dishes.splice(i, 1);
        dishesInBasket.amounts.splice(i, 1);
    } else {
        dishesInBasket.amounts[i] -= 1;
    }
    
    changeAddButton(indexDish);
    renderBasket();
}

function deleteAllFromBasket(indexDish) {
    const i = dishesInBasket.dishes.indexOf(indexDish);

    dishesInBasket.dishes.splice(i, 1);
    dishesInBasket.amounts.splice(i, 1);

    changeAddButton(indexDish);
    renderBasket();
}

function changeAddButton(indexDish) {
    const addButtonRef = document.getElementById(`#ButtonAddToBasket${indexDish}`);
    if (dishesInBasket.dishes.includes(indexDish)) {
        const i = dishesInBasket.dishes.indexOf(indexDish);
        const amount = dishesInBasket.amounts[i];

        addButtonRef.innerHTML = `Added ${amount}`;
        addButtonRef.classList.add("btn-added-to-basket");
    } else {
        addButtonRef.innerHTML = `Add to basket`;
        addButtonRef.classList.remove("btn-added-to-basket");
    }
}

function showBasketOverlay() {
    document.getElementById('#BasketDialog').showModal();
    renderBasket();
}