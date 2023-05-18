//Написать функции-конструкторы кошечек и собачек, прототипов которых является ф-к животное.
function Animal(name, age, breed, voice, meal) {
    this.name = name
    this.age = age
    this.breed = breed
    this.voice = voice
    this.meal = meal

    this.eat = function () {
        return `${this.name} любит есть ${this.meal}`
    }
}

Animal.prototype.say = function () {
    return `${this.name} говорит ${this.voice}`
}

function Cat(name, age, breed, voice, meal, quantityofVaccines) {
    Animal.call(this, name, age, breed, voice, meal)

    //Вопрос: уже задавала, но хочу еще раз уложить в голове - если значения поля по умолчанию задано, то в арументы не передавать?
    this.likesToSleep = true,
        this.quantityofVaccines = quantityofVaccines
}

function Dog(name, age, breed, voice, meal, owner, speed) {
    //Вопрос: если в call передаются аргументы родителя, то и в ф-ию дог (ребенок) тоже надо их записать в том же порядке?
    // правильно ли тут называть энимал родителем или это пока просто привязка?
    Animal.call(this, name, age, breed, voice, meal) // с call и передачей аргументов энимал в аргументы функцию дог все ок работает


    //Вопрос: так как пробовала еще с apply, то вопрос такой - нужно все аргументы энимал прописать в дог? Пробовала убирать аргументы ф-ции энимал из аргументов ф-ции дог, но в owner записываетяс Мими (должна Алиса), остальные поля корреткно заполнялись
    // Animal.apply(this, arguments) 

    this.speed = speed
    this.owner = owner // Вопрос: порядок передачи аргументов owner и speed в ф-ции и порядок прописывания значения для этих полей неважен?

    this.run = function () {
        return `${this.name} бежит со скоростью ${this.speed} km/h`
    }
}

Object.setPrototypeOf(Cat.prototype, Animal.prototype)
Object.setPrototypeOf(Dog.prototype, Animal.prototype)


const cat = new Cat('Барсик', 1, 'британец', 'мяу', 'рыбка', 4)
const dog = new Dog('Мими', 2, 'шпиц', 'гав', 'мясо', 'Алиса', 2)

console.log(cat);
console.log(cat.eat());
console.log(cat.say());

console.log(dog);
console.log(dog.eat());
console.log(dog.run());
console.log(dog.say())


