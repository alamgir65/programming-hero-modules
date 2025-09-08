const add = (a, b) => a + b;
console.log(add(5, 10));

const checkGreater = (a, b) => a > b ? a : b;
console.log(checkGreater(35, 10));

const sayHello = (name) => {
    return `Hello, ${name}`;
}
console.log(sayHello('Ayat'));



const obj = { foo: 1 };
obj.bar = 2;
console.log(obj)