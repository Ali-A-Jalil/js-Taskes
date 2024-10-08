//1-  Create an object car with properties brand (string), model (string), and price (number).

const car = {
    brand: "Mercedes",
    model: "C-Class",
    price: 1000000,

//2-  Add a method getPriceWithTax that calculates and returns the price of the car including a tax rate of 10%.

    getPriceWithTax: function (){
        return this.price * 1.1; // Adds 10% tax to the price
    },

//3-  Add another method describeCar that prints "The [brand] [model] costs [priceWithTax]" using the this keyword and the getPriceWithTax method.

    describeCar: function (){
        console.log(`The ${this.brand} ${this.model} costs ${this.getPriceWithTax()}`);
    }
};

//3-  Call the getPriceWithTax method.
car.getPriceWithTax();