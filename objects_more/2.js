// Условие (англ и русс)
// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
//Дана строка из цифр, нужео в ней все цифры меньше пяти заменить на 0, а больше или равно пяти заменить на 1, и вернуть результираующую строку.


// Логика 
// 1. Нужно пройти по каждому элементу строки и сделать замену. 
// 2. Так как строки неизменяемы, преобразуем строку в массив.
// 3. Нужно пройти по кадому элементу массив и перезаписать значения элементов - используем метод map, внутри которого условие
// 4. Из преобразованного мапом массив склеиваем строку


const fakeBin = (str) => {

    let arr = str.split('')

    return arr.map((el) => el < 5 ? el = 0 : el = 1).join('')
}

console.log(fakeBin('45385593107843568'));