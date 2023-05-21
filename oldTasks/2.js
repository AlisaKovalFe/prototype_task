let price = 4000;
let discountedPrice;

const sumOfPurchase = (price) => {
    if (price >= 1000 && price < 3000) return price * 0.95
    if (price >= 3000 && price < 5000) return price * 0.90
    if (price >= 5000) return price * 0.85
    return price
}

console.log(sumOfPurchase(4000));
console.log(sumOfPurchase(500));
console.log(sumOfPurchase(5000));