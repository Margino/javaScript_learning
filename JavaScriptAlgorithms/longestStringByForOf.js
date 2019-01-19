const longestString = (str) => {
    const REG_EX       = /\W/g;
    const ARR_OF_WORDS = str.replace(REG_EX, ' ').split(' ');
    let longestWord    = '';

    for (let word of ARR_OF_WORDS) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }

    return longestWord.length;
};

console.log(longestString('Hi, where is the airport?'));
console.log(longestString('Thanks for stopping by!'));
