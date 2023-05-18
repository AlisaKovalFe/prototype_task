// Напишите функцию, которая делает поверхностную проверку объекта 
// на пустоту.
//   * Ожидаемый результат: ({}) => true,
//       ({ a: undefined }) => true,
//       ({ a: 1 }) => false


//тут вызывает вопрос постановка задачи, мы по идее должны проверить значения объекта на 'пустоту'. Так?

const checkNull = (obj) => {
    // это решение сама придумала (видимо, оно не некорректное)
    let key = Object.keys(obj)

    //Вопрос:
    // если вывести в консоль obj[key], то  в последнем случае, когда есть свойства 'a' возвращается 6, при этом key в этом случае равен [ 'a' ], и по идее должно быть быть obj[['a']], но это не так, для него это obj[a], почему?

    if (obj[key] === undefined || !obj[key]) {
        return true
    }
    return false


    // это в инете нашла (до самой пойти по ключам не дошло)
    // for (let key in obj) {
    //     if (obj[key] === undefined) return true
    //     return false
    // }
    // return true
}

console.log(checkNull({}));
console.log(checkNull({ a: undefined }));
console.log(checkNull({ a: 6 }));