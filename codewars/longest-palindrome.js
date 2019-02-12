'use strict';

// Find the length of the longest substring in the given string s that is the same in reverse.
// As an example, if the input was “I like racecars that go fast”, the substring (racecar) length would be 7.
// If the length of the input string is 0, the return value must be 0.

// "a" -> 1
// "aab" -> 2
// "abcde" -> 1
// "zzbaabcd" -> 4
// "" -> 0

const isPalindrome = (str) => {
    const regEx = /[\W_]/g;
    const cleanedStr = str.toLowerCase().replace(regEx);
    const reverseStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reverseStr;
}

const longestPalindrome = function(str){
    const lengthStr = str.length;
    let string;
    let result = 0;

    for (let i = lengthStr; i >= 1; i--) {
        // console.log('i',i);
        for (let j = 0; j + i <= lengthStr; j++) {
            console.log('i:',i,'j:',j, 'j + i:', j + i);
            string = str.slice(j, j + i + 1);
            console.log('string', string);
            if (isPalindrome(string)) {
                return string.length;
            };
            console.log('result',result);
        };

    };

  // return result;
}

// console.log(longestPalindrome("a")); // 1
// console.log(longestPalindrome("aa")); // 2
console.log(longestPalindrome("baabcd")); // 4
