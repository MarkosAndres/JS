class Animal {
    constructor(name, energy) {
        this.name = name;
        this.energy = energy;
    }
    eat(amount) {
        console.log(`${this.name} is eating`);
        this.energy += amount;
    }
    sleep(lenght) {
        console.log(`${this.name} is sleeping`);
        this.energy += lenght;
    }
    play(length) {
        console.log(`${this.name} is playing`);
        this.energy -= length;
    }
}

let leo = new Animal('Leo', 5);
leo.eat(6);

Object.getPrototypeOf(leo);
leo.hasOwnProperty('name');

// arrow funtcions don't work as contructor function
// arrow functions don't have prototype object