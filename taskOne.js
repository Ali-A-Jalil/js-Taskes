
//1-  Create an object named person with properties: name, age, and greet.
const person= {

// 3- Declare the name as a string and age as a number.
    name: "Ali", // 1- The name property should be a string.
    age: 32, // 2- The age property should be a number.
// 2-  The greet property should be a method that uses the this keyword to log a message like: "Hello, my name is [name] and I am [age] years old."
    greet: function(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);

    }
};

// to use the greet method
person.greet();



