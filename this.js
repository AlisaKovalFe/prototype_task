// let calculator = {
//     read() {
//         const num1 = prompt('введите число 1', '1')
//         const num2 = prompt('введите число 2', '1')

//         this.num1 = num1
//         this.num2 = num2
//     },

//     sum() {
//         return +this.num1 + +this.num2
//     },

//     mul() {
//         return this.num1 * this.num2
//     }
// };

// console.log(calculator.read());
// console.log(calculator.sum());
// console.log(calculator.mul());

let ladder = {
    step: 0,
    up() {
        this.step++
        return this
    },
    down() {
        this.step--
        return this
    },
    showStep: function () { // показывает текущую ступеньку
        console.log(this.step);
        return this // зачем тут это?
    }
};

console.log(ladder.up().up().down().showStep().down().showStep());