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


///// 
console.log('----------------------------------------------------');



const loadData = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(res => res.json())
        .then(data => console.log(data))
};

