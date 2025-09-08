class Animal {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    eat(){
        console.log(`${this.name} is eating.`);
    }
}

class Dog extends Animal {
    constructor(name, age , breed){
        super(name, age);
        this.breed = breed;
    }

    bark(){
        console.log(`${this.name} is barking.`);
    }
}

const black = new Dog('Black', 3, 'Labrador');
console.log(black);
black.eat();
black.bark();


class Cat extends Animal{
    constructor(name, age, color){
        super(name, age);
        this.color = color;
    }

    meow(){
        console.log(`${this.name} is meowing.`);
    }
}

const tom = new Cat('Tom', 2, 'Gray');
console.log(tom);
tom.eat();
tom.meow();