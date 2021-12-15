class Dog {
    set name(value) {
        this._name = value;
    }
    get name() {
        return this._name;
    }
    get type() {
        return 'dog';
    }
    makeSound() {
        return 'Woef';
    }
}
class Cat {
    set name(value1) {
        this._name = value1;
    }
    get name() {
        return this._name;
    }
    get type() {
        return 'cat';
    }
    makeSound() {
        return 'Miauw';
    }
}
class Parrot {
    set name(value2) {
        this._name = value2;
    }
    get name() {
        return this._name;
    }
    get type() {
        return 'parrot';
    }
    makeSound() {
        return 'I am a pirate';
    }
}
class Markhoor {
    set name(value3) {
        this._name = value3;
    }
    get name() {
        return this._name;
    }
    get type() {
        return 'markhoor';
    }
    makeSound() {
        return 'longhorn pewpew';
    }
}
class Zoo {
    addAnimal(animal1) {
        this._animals.push(animal1);
    }
    get animals() {
        return this._animals;
    }
    constructor(){
        this._animals = new Array();
    }
}
let zoo = new Zoo;
zoo.addAnimal(new Cat);
zoo.addAnimal(new Dog);
zoo.addAnimal(new Parrot);
zoo.addAnimal(new Markhoor);
zoo.animals.forEach((animal)=>{
    document.querySelector('#target').innerHTML += animal.type + ": " + animal.makeSound() + "<br>";
});

//# sourceMappingURL=index.8957212c.js.map
