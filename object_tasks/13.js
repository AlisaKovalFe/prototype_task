// Напишите функцию, которая делает глубокую проверку на 
// пустоту объекта.
//   * Пустые значения: '', null, NaN, undefined, [], {}
//   * Ожидаемый результат: ({}) => true,
//       ({ a: { b: undefined } }) => true,
//       ({ a: { b: [] } }) => true



//Вопрос: не очень поняла постановку задачи. Проверка на пустоту в моему понимании это когда объект {}, в остальных случаях по идее - это проверка на то пустота ли в значенияз объекта. Объясни, плиз.

// дальше попытка решения, явно она косая, но я не догоняю, что тут стоит сделать. Если стрингифай, а потом через инклуд смотреть, тоже фигня выходила
function checkNullDeep(obj) {

    let arr = Object.values(obj)
    console.log(arr);

    if (JSON.stringify(obj) === '{}') return true

    for (let i = 0; i < arr.length; i++) {
        for (key in arr[i]) {
            if (!Boolean(arr[i][key])) return true
        }
    }
    return false
}

console.log(checkNullDeep({}));
console.log(checkNullDeep({ a: { b: undefined } }));
console.log(checkNullDeep({ a: { b: [] } }));
console.log(checkNullDeep({ a: { b: '' } }));
console.log(checkNullDeep({ a: { b: null } }));
console.log(checkNullDeep({ a: { b: NaN } }));
console.log(checkNullDeep({ a: { b: 2 } }));

