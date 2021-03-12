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

function Animal(name, energy) {
    let animal = Object.create(animalMethods); // animalMethods comes into picture for any fail lookups
    animal.name = name;
    animal.energy = energy;
    return animal;
}

const leo = Animal('Leo', 100); // NOTE: we are not using the 'new' keyword
leo.eat(50);

// All this is one way to do it, it works
// but JS offers a built in solution, intead of managing
// all our animals functions, this is call PROTOTYPE


function a() {}
a.prototype // returns an object, it is a property on an function that points to an object 