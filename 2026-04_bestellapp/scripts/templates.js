// const xmlns = 'xmlns="http://www.w3.org/2000/svg"';
// const viewBoxShoppingCart = 'viewBox="0 0 120 120"';
// const pathShoppingCart = 'path d="M36.0333 120C32.7302 120 29.9026 118.825 27.5505 116.475C25.1983 114.125 24.0222 111.3 24.0222 108C24.0222 104.7 25.1983 101.875 27.5505 99.525C29.9026 97.175 32.7302 96 36.0333 96C39.3363 96 42.164 97.175 44.5161 99.525C46.8683 101.875 48.0444 104.7 48.0444 108C48.0444 111.3 46.8683 114.125 44.5161 116.475C42.164 118.825 39.3363 120 36.0333 120ZM96.0888 120C92.7857 120 89.9581 118.825 87.6059 116.475C85.2538 114.125 84.0777 111.3 84.0777 108C84.0777 104.7 85.2538 101.875 87.6059 99.525C89.9581 97.175 92.7857 96 96.0888 96C99.3918 96 102.219 97.175 104.572 99.525C106.924 101.875 108.1 104.7 108.1 108C108.1 111.3 106.924 114.125 104.572 116.475C102.219 118.825 99.3918 120 96.0888 120ZM30.9286 24L45.3419 54H87.3807L103.896 24H30.9286ZM25.2233 12H113.805C116.107 12 117.859 13.025 119.06 15.075C120.261 17.125 120.311 19.2 119.21 21.3L97.8904 59.7C96.7894 61.7 95.3131 63.25 93.4613 64.35C91.6096 65.45 89.5828 66 87.3807 66H42.6394L36.0333 78H102.094C103.796 78 105.222 78.575 106.373 79.725C107.524 80.875 108.1 82.3 108.1 84C108.1 85.7 107.524 87.125 106.373 88.275C105.222 89.425 103.796 90 102.094 90H36.0333C31.5291 90 28.126 88.025 25.8239 84.075C23.5217 80.125 23.4216 76.2 25.5236 72.3L33.6311 57.6L12.0111 12H6.00555C4.30398 12 2.87766 11.425 1.7266 10.275C0.575532 9.125 0 7.7 0 6C0 4.3 0.575532 2.875 1.7266 1.725C2.87766 0.575 4.30398 0 6.00555 0H15.7646C16.8656 0 17.9166 0.3 18.9175 0.9C19.9184 1.5 20.6691 2.35 21.1696 3.45L25.2233 12Z" '
// const viewBoxStar = 'viewBox="0 0 23 22"';
// const pathStar = 'path d="M4.89113 21.5902C4.51333 21.8201 4.04501 21.4824 4.14385 21.0513L5.76226 13.9935C5.8034 13.814 5.74263 13.6265 5.60407 13.5053L0.171941 8.75452C-0.159652 8.46451 0.0186478 7.91848 0.457487 7.88006L7.62822 7.25214C7.81322 7.23594 7.974 7.11854 8.04576 6.94725L10.8279 0.306767C10.9993 -0.102286 11.5788 -0.102286 11.7502 0.306766L14.5324 6.94725C14.6041 7.11854 14.7649 7.23594 14.9499 7.25214L22.1206 7.88006C22.5595 7.91848 22.7378 8.46451 22.4062 8.75452L16.9741 13.5053C16.8355 13.6265 16.7747 13.814 16.8159 13.9935L18.4343 21.0513C18.5331 21.4824 18.0648 21.8201 17.687 21.5902L11.549 17.855C11.3893 17.7579 11.1888 17.7579 11.0291 17.855L4.89113 21.5902Z" '

function templateEmptyBasket() {
    return `
        <div class="basket">
            <h3>Your Basket</h3>
            <p class="p-empty-basket">Nothing here yet.<br>Go ahead and choose something delicious!</p>
            <img class=""
                src="./assets/icons/shopping_cart_big.svg" 
                alt="Einkaufswagen-Icon">
        </div>`
}

function templateFilledBasket() {
    return `
        <div class="basket">
            <h3>Your Basket</h3>
            <div id="#ContainerChoosenDishes"
                class="choosen-dishes-container">
                
            </div>
            <div class="money-calculation">
                <table>
                    <tr class="font-20px-600">
                        <td>Subtotal</td>
                        <td id="#Subtotal"></td>
                    </tr>
                    <tr class="font-20px-600">
                        <td>Delivery fee</td>
                        <td id="#DeliveryFee"></td>
                    </tr>
                    <tr class="font-22px-700">
                        <th>Total </th>
                        <th id="#Total"></th>
                    </tr>

                </table>
                <button id="#BuyNow"
                    class="btn-buy-now">
                </button>  
            </div>
        </div>`
}

function templateDishContainer(indexDish, name, imageFilename, description, price) {
    return `
        <div class="dish-container">
            <img class="dish-img"
                src="./assets/img/${imageFilename}" 
                alt="">
            <div class="name-and-description-container">
                <p class="font-24px-600">${name}</p>
                <p class="font-16px-500">${description}</p>
            </div>
            <div class="price-and-add-container">
                <p class="font-24px-600">${price}</p>
                <button onclick="addToBasket(${indexDish})" 
                    class="btn-add-to-basket">
                    Add to basket
                </button>
            </div>
        </div>`
}

function templateDishCartInBasket(indexDish, name, amount, basketPrice) {
    return `
        <div class="choosen-dish-card">
            <p class="font-22px-700">${amount} x ${name}</p>
            <div class="amount-price-container">
                <p class="font-24px-600">
                    <button onclick="deleteFromBasket(${indexDish})"
                        class="btn-minus-plus font-24px-600">
                        -
                    </button>
                    <span> ${amount} </span>
                    <button onclick="addToBasket(${indexDish})"
                        class="btn-minus-plus font-24px-600">
                        +
                    </button>
                </p>
                <p class="font-22px-700">${basketPrice}</p>
            </div>
        </div>`
}