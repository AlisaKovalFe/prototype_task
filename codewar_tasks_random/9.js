// Given an object (meet) containing team member names as keys, and their happiness rating out of 10 as the value, you need to assess the overall happiness rating of the group. If <= 5, return 'Get Out Now!'. Else return 'Nice Work Champ!'.
// Happiness rating will be total score / number of people in the room.
// Note that your boss is in the room (boss), their score is worth double it's face value (but they are still just one person!).

// Дан объект, содержащий учатсников команды в качестве ключей и уровень счастья из 10 как значение. Нужно оценить общиц рейтинг счастья. Если меньше 5, то вернуть 'Get Out Now!', если больше, то  'Nice Work Champ!'. Босс находится в комнате, его очки стоят в два раза больше

const outed = (meet, boss) => {

    if (meet[boss]) meet[boss] = meet[boss] * 2

    let arrOfValues = Object.values(meet)
    let sumAverage = arrOfValues.reduce((acc, el) => acc + el, 0) / arrOfValues.length

    return sumAverage <= 5 ? 'Get Out Now!' : 'Nice Work Champ!'
}

console.log(outed({ 'tim': 0, 'jim': 2, 'randy': 0, 'sandy': 7, 'andy': 0, 'katie': 5, 'laura': 1, 'saajid': 2, 'alex': 3, 'john': 2, 'mr': 0 }, 'laura'));
console.log(outed({ 'tim': 1, 'jim': 3, 'randy': 9, 'sandy': 6, 'andy': 7, 'katie': 6, 'laura': 9, 'saajid': 9, 'alex': 9, 'john': 9, 'mr': 8 }, 'katie'));
console.log(outed({ 'tim': 2, 'jim': 4, 'randy': 0, 'sandy': 5, 'andy': 8, 'katie': 6, 'laura': 2, 'saajid': 2, 'alex': 3, 'john': 2, 'mr': 8 }, 'john'));
console.log(outed({ "tim": 4, "jim": 8, "randy": 0, "sandy": 6, "andy": 4, "katie": 9, "laura": 3, "saajid": 7, "alex": 6, "john": 0, "mr": 6 }, "katie"));