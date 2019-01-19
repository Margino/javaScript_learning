const alphaOrder = (str) => {
    return str.split('').sort().join('');
};

console.log(alphaOrder('hello'));
console.log(alphaOrder('goobye'));

// "hello" ➞ "olleh"
// "goobye" ➞ "eyboog"
// "now" ➞ "won"
// "javascript" ➞ "aacijprstv"
