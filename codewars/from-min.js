'use strict';
// Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once ( ignore duplicates).
// Only positive integers will be passed to the function (> 0 ), no negatives or zeros.

function minValue( values ) {
  const sortedArray = values.sort( ( a, b ) => a - b );

  let newArr = [];
  for ( let i = 0; i < sortedArray.length; i++ ) {
     if ( i === 0 ) {
         newArr.push( sortedArray[i] );
     } else if( sortedArray[i] !== sortedArray[i - 1] ) {
        newArr.push( sortedArray[i] );
     }
  }
  return Number( newArr.join('') );
}

// alternative version
function minValue2( values ) {
    const newArr = values
                        .filter( ( e, i, arr ) => arr.indexOf(e) === i )
                        .sort()
                        .join('');
    return Number( newArr );
}

console.log(minValue([1, 3, 1])); //13
console.log(minValue([4, 7, 5, 7])); //457
console.log(minValue([1, 9, 1, 3, 7, 4, 6, 6, 7])); //134679
