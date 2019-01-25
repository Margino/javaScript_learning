function sumAll() {
    const numbers = Array.from(arguments);
    return numbers.reduce((sum, num) => {
        return sum + num;
    }, 0);
}
console.log(sumAll(1, 4, 6, 8));


const ages = Array.of(13, 18, 42, 92);
console.log(ages);
