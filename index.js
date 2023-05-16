//Написать функции-конструкторы кошечек и собачек, прототипов которых является ф-к животное.

function Animal(name, age, breed, voice, meal) {
    this.name = name
    this.age = age
    this.breed = breed
    this.voice = voice
    this.meal = meal

    this.eat = function () {
        return `${this.name} likes to eat ${this.meal}`
    }
}

Animal.prototype.say = function () {
    return `${this.name} говорит ${this.voice}`
}

// в привичном варианте
// const cat = new Animal('Барсик', 1, 'британец', 'мяу')
// const dog = new Animal('Мими', 2, 'шпиц', 'гав')


function Cat(quantityofVaccines) {
    Animal.apply(this, arguments) //непонятно
    this.likesToSleep = true,
        this.quantityofVaccines = quantityofVaccines
}

function Dog(owner, speed) {
    Animal.apply(this, arguments)
    this.speed = speed
    this.owner = owner

    this.run = function run() {
        return `${this.name} run with ${this.speed} km/h`
    }
}

Object.setPrototypeOf(Cat, Animal)
Object.setPrototypeOf(Dog, Animal)


const cat = new Cat('Барсик', 1, 'британец', 'мяу', 'рыбка', 4)
//в количестве вакцин консоль пишет барски, likesToSleep я в аргументы не хочу передавать, так как это пусть будет по умолчанию
//если ставлю likesToSleep в аругменты все равно чушь получается


const dog = new Dog('Мими', 2, 'шпиц', 'гав', 'мясо', 'Алиса', 2)

console.log(cat); //почему в количество вакцин записан барсик?
console.log(cat.eat());
// console.log(cat.say()); //не работает

console.log(dog); //почему в owner записана Мими?
console.log(dog.eat());
console.log(dog.run());
