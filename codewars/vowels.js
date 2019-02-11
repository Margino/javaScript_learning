'use strict';

// We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).
// So given a string "super", we should return a list of [2, 4].

// NOTE: Vowels in this context refers to English Language Vowels - a e i o u y
// NOTE: this is indexed from [1..n] (not zero indexed!)

function vowelIndices( [...word] ) {
    const vowels = [ 'a', 'e', 'i', 'o', 'u', 'y' ];
    let result = [];
    word.forEach( ( letter, index ) => {
        if ( vowels.includes( letter.toLowerCase() ) ) result.push( index + 1 );
    });
    return result;
}

console.log(vowelIndices("mmm")); //[]
console.log(vowelIndices("Apple")); //[1,5]
console.log(vowelIndices("super")); //[2,4]
