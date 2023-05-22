// Условие (англ и русс)
// Oh no, the map method for arrays has been disabled. Can you fix it?
// In case you haven't come across the map method for arrays, here is how it works:

// Метод map не доступен для массивов, нужно это починить

//Логика
// Изначальные рассуждения
// Map cоздает новый массив с результатом вызова функции-колбэка для каждого элемента массива. Я могу создать новый пустой массив и в цикле пушить туда измененные элементы изначального массива
// Запушить надо то, что произойдет с каждым элементом, то есть то, что произойдет после того, как для каждого элемента будет вызвана колбэк ф-ция в методе map. Значит я вхожу в цикл и внутри создаю ф-цию callback, которая будет обрабатывать каждый элемент, а пушить я буду результат обработки элемента этой ф-цией. Но как предусмотреть разные операции для элементов в этой ф-ции callback (где-то умножение на 2, где-то возведение в степень)?? нужно как-то сослаться (привязать?) на эту ф-ции (которые разные)

// изначально вот это писала
// Array.prototype.map = function () {

//     let newArr = []

//     for (let i = 0; i < this.length; i++) {
//         let callbakc = () => this[i]
//         newArr.push(callbakc())
//     }
//     return newArr
// }


// Потом почитала мдн по методу map и там было о call. Они там прописали название map в прототип и далее на нем вызвали метод call, привязали this и вторым агрументом передали колбэк. Сделала по аналогии, у меня были мысли о привязке контекста, но не дошло.
// в консоль выводит правильно, но тест на кодварс не проходит, вот что пишет - Error: the string "TODO: Fix the 'map' method for arrays" was thrown, throw an Error :). Не пойму, может просто потому, что метод map прописан в прототипе, пробовала delete, не помогло

console.log(Array.prototype.map);

const mapMethod = () => {
    const map = Array.prototype.map;
    return map.call(this, callback);
}


console.log([1, 2, 3].map(x => x ** 2));
console.log([1, 2, 3].map(x => 2 * x));
console.log([1, 2, 3].map(x => 2 ** x));
console.log([1, 2, 3].map(x => x.toString()));
console.log([1, 2, 3].map(x => parseInt(x)))


// Вопрос 1 
console.log(Array.hasOwnProperty('map')); // в консоли false, почему? ведь это метод массива


// Вопрос 2 (нашла в мдн, не могу тут понять почему такие this. На стоке 55 еще вроде понятно, а вот на строке совсем непонятно
var animals = [
    { species: 'Лев', name: 'Король' },
    { species: 'Кит', name: 'Фэйл' }
];

for (var i = 0; i < animals.length; i++) {
    (function (i) {
        // console.log(this); // почему такой this
        this.print = function () {
            // console.log(this); // почему такой this, здесь совсем непонятно
            console.log('#' + i + ' ' + this.species + ': ' + this.name);
        }
        this.print();
    }).call(animals[i], i);
}

