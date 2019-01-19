const repeatString = (str, num = 1) => {
    if(num <= 0) return str;

    let newStr = '';
    for(let i = 0; i < num; i++) {
        newStr += str;
    }

    return newStr;
};

console.log(repeatString('car', 4));
console.log(repeatString('bar', 0));
