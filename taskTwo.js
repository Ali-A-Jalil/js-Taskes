// 1-  Create an object named calculator that has two properties: num1 and num2, both numbers.

const calculator ={
    num1: 10,
    num2: 20,

// 2-  Add a method sum to the object, which returns the sum of num1 and num2.
    sum: function(){
        return this.num1 + this.num2;
    },

// 3-  Add another method describeSum that prints "The sum of [num1] and [num2] is [sum]" using this and the sum method.
    describeSum: function(){
    console.log(`The sum of ${this.num1} and ${this.num2} is ${this.sum()}`);
}

};

// call the describeSum method
calculator.describeSum();

