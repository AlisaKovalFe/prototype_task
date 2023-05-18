//изначальный вариант работы map

console.log([1, 2, 3].map((el) => el * 2));

//новый вариант работы map (теперь работает как метод some)

const target = 3

Array.prototype.map = function () {
    for (let i = 0; i < this.length; i++) {
        if (this[i] > target) return true
    }
    return false
}

console.log([1, 2, 3].map());

