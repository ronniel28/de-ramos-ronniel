// a. Use arrow functions to calculate the square of a given number and log the result to the console
const calculateSquare = (number) => number ** 2;
console.log(calculateSquare(5)); // Output: 25

// b. Use template literals to create a welcome message that includes the name and age of a person
const createWelcomeMessage = (name, age) => `Welcome, ${name}! You are ${age} years old.`;
console.log(createWelcomeMessage("Alice", 30)); // Output: Welcome, Alice! You are 30 years old.

// c. Use destructuring to extract the first and last name from a person object and log them to the console
const person = { firstName: "John", lastName: "Doe", age: 25 };
const { firstName, lastName } = person;
console.log(`First Name: ${firstName}, Last Name: ${lastName}`); // Output: First Name: John, Last Name: Doe

// d. Use the spread operator to merge two arrays into a single array
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const mergedArray = [...array1, ...array2];
console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6]

// e. Use default parameters to create a function that calculates the area of a rectangle
const calculateArea = (length = 1, width = 1) => length * width;
console.log(calculateArea());       // Output: 1 (default 1x1)
console.log(calculateArea(5, 10));  // Output: 50

// f. Create a class called "Person" with properties for name and age, and a method to introduce the person
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const person1 = new Person("Alice", 30);
person1.introduce(); // Output: Hello, my name is Alice and I am 30 years old.
