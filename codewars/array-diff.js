// It should remove all values from list a, which are present in list b.
//
// array_diff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:
//
// array_diff([1,2,2,2,3],[2]) == [1,3]

function array_diff(a, b) {
  if ( a.length === 0 ) return [];
  if ( b.length === 0 ) return a;

  return a.filter(item => !b.includes(item));

  // aletrnative:
  // return a.filter(item => b.indexOf(item) === -1);
}

console.log(array_diff([], [4,5])); // [4,5]
console.log(array_diff([3,4], [3])); // 3
console.log(array_diff([1,8,2], [])); // [1,8,2]
