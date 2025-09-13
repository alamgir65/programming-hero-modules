console.log('Hello from script.js');


const person = {
    name: 'John Doe',
    age: 30,
    city: 'New York',
    frieds : ['Alice', 'Bob', 'Charlie'],
    isEmployed: true,
    salary : 75000
}

console.log(person);

const personJson = JSON.stringify(person);
console.log(personJson);