class Player {
    constructor(name, age,type = 'Cricket') {
        this.name = name;
        this.age = age;
        this.type = type;
        this.team = 'Bangladesh';
    }

    get_info(){
        return `Name: ${this.name}, Age: ${this.age}, Team: ${this.team}`;
    }
}

const player1 = new Player('Sakib Al Hasan', 35);
const player2 = new Player('Leonel Messi', 36,'Football');

console.log(player1);
console.log(player2);
console.log(player1.get_info());