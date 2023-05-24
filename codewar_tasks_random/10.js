// Every now and then people in the office moves teams or departments. Depending what people are doing with their time they can become more or less boring. Time to assess the current team.

// You will be provided with an object(staff) containing the staff names as keys, and the department they work in as values.

// Each department has a different boredom assessment score, as follows:
// accounts = 1
// finance = 2
// canteen = 10
// regulation = 3
// trading = 6
// change = 6
// IS = 8
// retail = 5
// cleaning = 4
// pissing about = 25

// Depending on the cumulative score of the team, return the appropriate sentiment:

// <= 80: 'kill me now'
//     < 100 & > 80: 'i can handle this'
// 100 or over: 'party time!!'

// Дан объект, который содержит имена стафа как ключи и названия департментов, в которых они работают как значения. У каждого департамента своя оценка скуки. В зависимости от кумулятивной оценки скуки команды нужно вернуть выражение

const boredom = (staff) => {
    let departments = Object.values(staff)
    let score = { 'accounts': 1, 'finance': 2, 'canteen': 10, 'regulation': 3, 'trading': 6, 'change': 6, 'IS': 8, 'retail': 5, 'cleaning': 4, 'pissing about': 25 }

    let result = {}

    // for (let i = 0; i < arr.length; i++) {
    //     (!result[arr[i]]) ? result[arr[i]] = score[arr[i]] : result[arr[i]] = result[arr[i]] + score[arr[i]]
    // }

    departments.map((el) => !result[el] ? result[el] = score[el] : result[el] = result[el] + score[el])

    let scoreOfDepartmets = Object.values(result).reduce((acc, el) => acc + el, 0)

    return scoreOfDepartmets <= 80 ? 'kill me now' :
        scoreOfDepartmets > 80 && scoreOfDepartmets < 100 ? 'i can handle this' :
            scoreOfDepartmets >= 100 ? 'party time!!' :
                '';
}

console.log(boredom({ tim: 'change', jim: 'accounts', randy: 'canteen', sandy: 'change', andy: 'change', katie: 'IS', laura: 'change', saajid: 'IS', alex: 'trading', john: 'accounts', mr: 'finance' }));

console.log(boredom({ tim: 'IS', jim: 'finance', randy: 'pissing about', sandy: 'cleaning', andy: 'cleaning', katie: 'cleaning', laura: 'pissing about', saajid: 'regulation', alex: 'regulation', john: 'accounts', mr: 'canteen' }));

console.log(boredom({ tim: 'accounts', jim: 'accounts', randy: 'pissing about', sandy: 'finance', andy: 'change', katie: 'IS', laura: 'IS', saajid: 'canteen', alex: 'pissing about', john: 'retail', mr: 'pissing about' }));