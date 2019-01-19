const alphaOrder = (str) => {
    return [...str].sort().join('');
}

console.log(alphaOrder('hello'));
console.log(alphaOrder('goobye'));
