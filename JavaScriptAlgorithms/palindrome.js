const isPalindrome = (str) => {

    const REG_EX      = /\W/g;
    let clearString   = str.replace(REG_EX, '')
                           .toLowerCase();
    let reverseString = clearString.split('')
                           .reverse()
                           .join('');

    return clearString === reverseString;
};

console.log(isPalindrome('Eva, Can I Stab Bats In A Cave?'));
console.log(isPalindrome('Was It A Rat I Saw?'));
console.log(isPalindrome('A nut for a jar of tuna?'));
console.log(isPalindrome('I am not a palindrome!'));
