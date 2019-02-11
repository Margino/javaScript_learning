// Complete the function to return true if the two arguments given are anagrams of theeach other; return false otherwise.
//
// Examples
// "foefet" is an anagram of "toffee"
// "Buckethead" is an anagram of "DeathCubeK"

const toStr = ( str ) => {
    return str
            .toLowerCase()
            .split('')
            .sort()
            .toString();
};

const isAnagram = ( test, original ) => {
    const testString     = toStr( test );
    const originalString = toStr( original );

    return testString === originalString ? true : false;
};

console.log(isAnagram("foefet", "toffee")); //true
console.log(isAnagram("Twoo", "WooT")); // true
console.log(isAnagram("dumble", "bumble")); //false
