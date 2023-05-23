// Create a function which compares two probabilities, returning true if the first one is most likely otherwise false.

// Написать ф-цию, которая сравнивает 2 вероятности и возвращает true, если 1я больше, иначе false

const mostLikely = (prob1, prob2) => {

    let a1 = prob1.split(':')
    let a2 = prob2.split(':')

    return a1[0] / a1[1] > a2[0] / a2[1]
}

console.log(mostLikely('1:3', '1:2'));