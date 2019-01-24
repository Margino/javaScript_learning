const autoReplace = (needles, change, haystack) => {
    if (!needles || !change || !haystack) return false;

    let str = haystack.split(' ');
    let newStr = str.map((word) => {
        if (needles.toLowerCase().includes(word.toLowerCase())) {

        }
        // return word;
        // return needles.forEach((item) => {
        //     console.log(word, item);
        //     if (item.toLowerCase == word.toLowerCase) {
        //         return word = change;
        //     }
        // });
    });
    return newStr;
};

console.log(autoReplace(['salad', 'tomato'], 'foot', 'the fresh tomatoes are for a salad'));
