
AnimalWithNew.prototype.eat = function(amount) {
    console.log(`${this.name} is eating`);
    this.energy += amount;
}

AnimalWithNew.prototype.sleep = function(lenght) {
    console.log(`${this.name} is sleeping`);
    this.energy += lenght;
}

AnimalWithNew.prototype.play = function(lenght) {
    console.log(`${this.name} is playing`);
    this.energy -= length;
}


function AnimalWithNew(name, energy) {
    // let animal = Object.create(AnimalWithNew.prototype); THIS IS DONE AUTOMATICALLY BEHIND SCENES
    this.name = name;
    this.energy = energy;
    // return animal; THIS IS DONE AUTOMATICALLY BEHIND SCENES
}

/**function Animal(name, energy) {
    let animal = Object.create(Animal.prototype); // now prototype comes into picture for any fail lookups
    animal.name = name;
    animal.energy = energy;
    return animal;
}**/

const leo = new AnimalWithNew('Leo', 100); // NOTE: we are not using the 'new' keyword
leo.eat(50);