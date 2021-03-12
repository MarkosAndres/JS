/*
const animalMethods = {
    eat(amount) {
        console.log(`${this.name} is eating`);
        this.energy += amount;
    },
    sleep(lenght) {
        console.log(`${this.name} is sleeping`);
        this.energy += lenght;
    },
    play(length) {
        console.log(`${this.name} is playing`);
        this.energy -= length;
    }
}
*/

function Animal(name, energy) {
    let animal = Object.create(Animal.prototype); // now prototype comes into picture for any fail lookups
    animal.name = name;
    animal.energy = energy;
    return animal;
}

// Now we moved functions to prototype object
Animal.prototype.eat = function(amount) {
    console.log(`${this.name} is eating`);
    this.energy += amount;
}

Animal.prototype.sleep = function(lenght) {
    console.log(`${this.name} is sleeping`);
    this.energy += lenght;
}

Animal.prototype.play = function(lenght) {
    console.log(`${this.name} is playing`);
    this.energy -= length;
}

const leo = Animal('Leo', 100); // NOTE: we are not using the 'new' keyword
leo.eat(50);