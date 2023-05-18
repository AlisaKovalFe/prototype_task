// Напишите функцию, которая делает глубокую проверку на 
// пустоту объекта.
//   * Пустые значения: '', null, NaN, undefined, [], {}
//   * Ожидаемый результат: ({}) => true,
//       ({ a: { b: undefined } }) => true,
//       ({ a: { b: [] } }) => true



//это не дописана!!!!!!!
function checkNullDeep(obj) {
    let json = JSON.stringify(obj);


    return json === '{}';
}

console.log(checkNullDeep({}));
console.log(checkNullDeep({ a: { b: undefined } }));
console.log(checkNullDeep({ a: { b: [] } }));

