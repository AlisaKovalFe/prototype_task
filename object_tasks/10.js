// Напишите функцию, которая возвращает вложенный массив вида
// `[[key, value], [key, value]]`.
//   * Ожидаемый результат: ({ a: 1, b: 2 }) => [['a', 1], ['b', 2]]

const transformObjToArray = (obj) => {
    return Object.entries(obj)
}

console.log(transformObjToArray({ a: 1, b: 2 }));