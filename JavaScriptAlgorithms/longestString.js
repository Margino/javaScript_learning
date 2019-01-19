const longestString = (str) => {
    const REG_EX    = /\W/g;
    let newStr      = str.replace(REG_EX, ' ');
    let arrOfWords  = newStr.split(' ');
    let longestWord = '';

    arrOfWords.forEach((word) => {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    });

    return longestWord.length;
};


// 'Hi, where is the airport?' -> 7
// 'Thanks for stopping by!' -> 8

console.log(longestString('Hi, where is the airport?'));
console.log(longestString('Thanks for stopping by!'));
