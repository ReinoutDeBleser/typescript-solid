class Dog {
    private _name;

    set name(value) {
        this._name = value;
    }

    get name() {
        return this._name;
    }

    get type() {
        return 'dog';
    }
    public makeSound() : string {
        return 'Woef';
    }
}

class Cat {
    private _name;

    set name(value) {
        this._name = value;
    }

    get name() {
        return this._name;
    }

    get type() {
        return 'cat';
    }
    public makeSound() : string {
        return 'Miauw';
    }
}

class Parrot {
    private _name;

    set name(value) {
        this._name = value;
    }

    get name() {
        return this._name;
    }

    get type() {
        return 'parrot';
    }
    public makeSound() : string {
        return 'I am a pirate';
    }
}

class Markhoor {
    private _name;
    set name (value) {
        this._name = value;
    }
    get name() {
        return this._name;
    }
    get type(){
        return 'markhoor'
    }
    public makeSound() : string {
        return 'longhorn pewpew';
    }
}

class Zoo {
    private _animals : Array<Object> = new Array<Object>();

    public addAnimal(animal: object) {
        this._animals.push(animal);
    }

    get animals(): Array<Object> {
        return this._animals;
    }
}
let zoo = new Zoo;
zoo.addAnimal(new Cat);
zoo.addAnimal(new Dog);
zoo.addAnimal(new Parrot);
zoo.addAnimal(new Markhoor);

zoo.animals.forEach((animal) => {
    document.querySelector('#target').innerHTML += (animal.type + ": " + animal.makeSound() + "<br>");
});