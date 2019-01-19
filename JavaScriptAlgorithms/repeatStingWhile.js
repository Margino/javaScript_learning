const repeatString = (str, num = 1) => {
    if (num <= 0) return str;

    let newStr = '';
    while (num > 0) {
        newStr += str;
        num--;
    }
    return newStr;
};

console.log(repeatString('car', 4));
console.log(repeatString('bar', 0));
