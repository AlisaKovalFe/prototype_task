// Julie is x years older than her brother, and she is also y times as old as him.

// Given x and y calculate Julie's age using the function age(x, y).

// Джули старше брата на x лет и y раз. Найти возраст Джули 

const age = (x, y) => {
    return x / (y - 1) + x
}

console.log(age(6, 3));
console.log(age(-15, 0.25));