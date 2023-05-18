// Напишите функцию, которая делает поверхностную проверку объекта 
// на пустоту.
//   * Ожидаемый результат: ({}) => true,
//       ({ a: undefined }) => true,
//       ({ a: 1 }) => false


const checkNull = (obj) => {
    // это сама придумала
    let key = Object.keys(obj) //тут возвращается массив, и должен по идее быть obj[['a']], но это не так, для него это obj[a], почему?

    if (obj[key] === undefined || !obj[key]) {
        return true
    }
    return false


    // это в инете нашла
    // for (let key in obj) {
    //     if (obj[key] === undefined) return true
    //     return false
    // }
    // return true
}

console.log(checkNull({}));
console.log(checkNull([]));
console.log(checkNull(''));
console.log(checkNull(NaN));
// console.log(checkNull(null)); с null мое решение не работает
console.log(checkNull({ a: undefined }));
console.log(checkNull({ a: 6 }));