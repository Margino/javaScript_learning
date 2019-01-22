'use strict';
const palmTree = (n = 1) => {

    return (typeof n === 'number' && n > 0) ? 'p'.repeat(n) : false;

    // if (!n) return 'p';
    // if (typeof n !== 'number' || n < 0) return false;
    //
    // let str = '';
    // for (let i = 0; i < n; i++) {
    //     str += 'p';
    // }
    // return str;
};

console.log(palmTree(5)); // ppppp
