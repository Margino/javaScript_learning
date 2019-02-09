// Complete the function that takes two numbers as input, num and nth and return the nth digit of num (counting from right to left).
//
// Note
// If num is negative, ignore its sign and treat it as a positive value
// If nth is not positive, return -1
// Keep in mind that 42 = 00042. This means that findDigit(42, 5) would return 0

// findDigit(5673, 4)     returns 5
// findDigit(129, 2)      returns 2
// findDigit(-2825, 3)    returns 8

const findDigit = function(num, nth){
    if (nth <= 0) return -1;
    if (num < 0) num = Math.abs(num);

    const nums = num.toString();
    if (nth > nums.length) return 0;

    return +nums.substr(-nth, 1);
}

console.log(findDigit(5673, 4)); // 5
console.log(findDigit(129, 2) ); // 2
console.log(findDigit(-2825, 3)  ); // 8
console.log(findDigit(-456, 4)  ); // 0
