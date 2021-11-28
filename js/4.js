class Animal {
    constructor(type, sound) {
        this.type = type;
        this.sound = sound;
    }
    // method
    say() {
        return `${this.sound} from ${this.type}`;
    }
}

class Dog extends Animal {
    constructor() {
        super('dog', 'bark');
    }
}

class Cat extends Animal {
    constructor() {
        super('cat', 'meow');
    }
}

const c1 = new Cat();
const d1 = new Dog();
const c2 = new Cat();
const d2 = new Dog();
console.log(c1.say(), c2.say(), d1.say(), d2.say());
