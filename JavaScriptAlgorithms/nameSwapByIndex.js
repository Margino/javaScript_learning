const nameSwap = (str) => {
    let arr = str.split(' ');
    return `${arr[1]} ${arr[0]}`;

    // let [a, b] = arr;
    // return `${b} ${a}`;
};

console.log(nameSwap('Abraham Lincoln'));
console.log(nameSwap('Hank Aron'));
