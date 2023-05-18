// Напишите функцию, которая поверхностно сравнивает два объекта.
// * Ожидаемый результат: True если объекты идентичны, false если 
// объекты разные ({ a: 1, b: 1 }, { a: 1, b: 1 }) => true

// ({ a: 1, b: 1 }) => [['a', 1], ['b', 1]]


//тут был ступор, я вошла в массив, но использовать индексы для обоих массивов не дошло, искала решения в инете
const compareObj = (obj1, obj2) => {

    //1 решение
    // let arr1 = Object.entries(obj1)
    // let arr2 = Object.entries(obj2)

    // for (let i = 0; i < arr1.length; i++) {

    //     if (arr1.length !== arr2.length) return false
    //     if (arr1[i][0] !== arr2[i][0]) return false
    //     if (arr1[i][1] !== arr2[i][1]) return false

    //     //я вот так еще придумала условия прописать
    //     // Вопрос: такие условия корреткны? 
    //     // if (arr1[i][i] !== arr2[i][i]) return false
    //     // if (arr1[i][i + 1] !== arr2[i][i + 1]) return false

    // }
    // return true


    //2 решение
    // let prop1 = Object.getOwnPropertyNames(obj1)
    // let prop2 = Object.getOwnPropertyNames(obj2)

    // if (prop1.length !== prop2.length) return false

    // for (let i = 0; i < prop1.length; i++) {
    //     if (obj1[prop1[i]] !== obj2[prop1[i]]) return false
    // }
    // return true


    // 3 решение 

    // Вопрос:
    // если мы используем { ...obj1, ...obj2 }, мы в некий целевой объект кладем два объекта, почему тогда когда мы логам в результате будет 
    // { a: 1, b: 1 }, то есть он убирае повторы? из статьи, которую ты прикрепила по спрэд оператору тоже не поняла, почему повторы убирается и как это точно работает

    return Object.keys({ ...obj1, ...obj2 }).every(key => obj1[key] === obj2[key]) // решение классное, до самой бы не дошло
}

console.log(compareObj({ a: 1, b: 1 }, { a: 1, b: 1 }));