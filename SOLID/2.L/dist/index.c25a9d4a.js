const percentageValue = 100;
class VariableDiscount {
    constructor(value = 0){
        this._value = value;
        if (value <= 0) throw new Error('You cannot create a variable discount with a negative value');
    }
    apply(price) {
        return price - price * this._value / percentageValue;
    }
    showCalculation(price1) {
        return price1 + " € -  " + this._value + "%";
    }
}
class FixedDiscount {
    constructor(value1 = 0){
        this._value = value1;
        if (value1 <= 0) throw new Error('You cannot create a fixed discount with a negative value');
    }
    apply(price2) {
        return Math.max(0, price2 - this._value);
    }
    showCalculation(price3) {
        return price3 + "€ -  " + this._value + "€ (min 0 €)";
    }
}
class NoDiscount {
    constructor(value2 = 0){
        this._value = value2;
    }
    apply(price4) {
        return price4;
    }
    showCalculation(price5) {
        return "No discount";
    }
}
class Product {
    constructor(name, price6, discount){
        this._name = name;
        this._price = price6;
        this._discount = discount;
    }
    get name() {
        return this._name;
    }
    get discount() {
        return this._discount;
    }
    get originalPrice() {
        return this._price;
    }
    //The reason we call this function "calculateX" instead of using a getter on Price is because names communicate a lot of meaning between programmers.
    //most programmers would assume a getPrice() would be a simple display of a property that is already calculated, but in fact this function does a (more expensive) operation to calculate on the fly.
    calculatePrice() {
        return this._discount.apply(this._price);
    }
    showCalculation() {
        return this._discount.showCalculation(this._price);
    }
}
class shoppingBasket {
    get products() {
        return this._products;
    }
    addProduct(product1) {
        this._products.push(product1);
    }
    constructor(){
        //this array only accepts Product objects, nothing else
        this._products = [];
    }
}
let cart = new shoppingBasket();
cart.addProduct(new Product('Chair', 25, new FixedDiscount(10)));
//cart.addProduct(new Product('Chair', 25, new FixedDiscount(-10)));
cart.addProduct(new Product('Table', 50, new VariableDiscount(25)));
cart.addProduct(new Product('Bed', 100, new NoDiscount(0)));
const tableElement = document.querySelector('#cart tbody');
cart.products.forEach((product)=>{
    let tr = document.createElement('tr');
    let td = document.createElement('td');
    td.innerText = product.name;
    tr.appendChild(td);
    td = document.createElement('td');
    td.innerText = product.originalPrice.toFixed(2) + " €";
    tr.appendChild(td);
    td = document.createElement('td');
    td.innerText = product.calculatePrice().toFixed(2) + " €";
    tr.appendChild(td);
    td = document.createElement('td');
    td.innerText = product.showCalculation();
    tr.appendChild(td);
    tableElement.appendChild(tr);
});

//# sourceMappingURL=index.c25a9d4a.js.map
