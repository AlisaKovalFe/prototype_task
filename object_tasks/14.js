// Напишите функцию, которая делает глубокое сравнение объектов.
//   * Ожидаемый результат: True если объекты идентичны 
// ({ a: 1, b: { c: 1 } }, { a: 1, b: { c: 1 } }) => true

const compareObj = (obj1, obj2) => {

    let json1 = JSON.stringify(obj1)
    console.log(json1); // почему в консоли нет кавычек у первых фигурных скобок?

    return JSON.stringify(obj1) === JSON.stringify(obj2)

}

console.log(compareObj({ a: 1, b: { c: 1 } }, { a: 1, b: { c: 1 } }));