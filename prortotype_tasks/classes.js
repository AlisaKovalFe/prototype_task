//Написать функции-конструкторы кошечек и собачек, прототипов которых является ф-к животное.

// сделал сама для практики
class Animal {
    constructor(name, age, breed, voice, meal) {
        this.name = name
        this.age = age
        this.breed = breed
        this.voice = voice
        this.meal = meal
    }

    eat() {
        return `${this.name} likes to eat ${this.meal}`
    }
}

Animal.prototype.say = function () {
    return `${this.name} говорит ${this.voice}`
}

class Cat extends Animal {
    constructor(name, age, breed, voice, meal, quantityofVaccines) {
        super(name, age, breed, voice, meal)

        this.likesToSleep = true,
            this.quantityofVaccines = quantityofVaccines
    }
}

class Dog extends Animal {
    // Вопрос: менять порядок параметров функции с аргументами при вызове нельзя? я пробовала, он косячно в поля записывает
    // если нельзя, то как тут применить деструктуризацию и можно ли?
    constructor(name, age, breed, voice, meal, owner, speed) {
        super(name, age, breed, voice, meal)
        this.owner = owner
        this.speed = speed
    }

    run() {
        return `${this.name} run with ${this.speed} km/h`
    }
}


const cat = new Cat('Барсик', 1, 'британец', 'мяу', 'рыбка', 4)
const dog = new Dog('Мими', 2, 'шпиц', 'гав', 'мясо', 'Алиса', 2)

console.log(cat);
console.log(cat.eat());
console.log(cat.say());

console.log(dog);
console.log(dog.eat());
console.log(dog.run());
console.log(dog.say()); 
