const alhpaOrder = (str) => {
    return str.split('').sort().join('');
};

console.log(alhpaOrder('hello'));
console.log(alhpaOrder('goobye'));

// "hello" ➞ "olleh"
// "goobye" ➞ "eyboog"
// "now" ➞ "won"
// "javascript" ➞ "aacijprstv"
