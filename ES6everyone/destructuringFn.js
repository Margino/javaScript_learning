function convertCurrency(amount) {
    const converted = {
        USD: amount * 0.75,
        MEX: amount * 13.30,
        AUG: amount * 1.01
    };
    return converted;
}

const { USD, AUG } = convertCurrency(100);
// console.log(USD, AUG);

function calcTip({ total = 100, tip = 0.15, tax = 0.13} = {}) {
    return total + (tip * total) + (tax * total);
}

const bill = calcTip({ tip: 0.20, total: 200 });
console.log(bill);

const bill2 = calcTip();
console.log(bill2);
