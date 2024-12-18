function calculateTotal() {
    const pizzaPrice = 12.99;
    const pastaPrice = 10.99;
    const burgerPrice = 8.99;
    const sushiPrice = 14.99;
    const saladPrice = 6.99;

    const pizzaQuantity = document.getElementById("pizza").value;
    const pastaQuantity = document.getElementById("pasta").value;
    const burgerQuantity = document.getElementById("burger").value;
    const sushiQuantity = document.getElementById("sushi").value;
    const saladQuantity = document.getElementById("salad").value;

    const total = (pizzaPrice * pizzaQuantity) +
                  (pastaPrice * pastaQuantity) +
                  (burgerPrice * burgerQuantity) +
                  (sushiPrice * sushiQuantity) +
                  (saladPrice * saladQuantity);

    document.getElementById("total").innerText = total.toFixed(2);
}
