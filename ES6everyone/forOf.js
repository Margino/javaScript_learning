const cuts = ['Chuck', 'Brisket', 'Shank', 'Short Rib'];

// for (const cut of cuts.entries()) {
//     console.log(cut[0], cut[1]);
// }

for (const [i, cut] of cuts.entries()) {
 console.log(`${cut} is the ${i + 1} item`);
}

function addUpNumbers() {
    let total = 0;
    for (const num of arguments) {
        total += num;
    }
    return total;
}
console.log(addUpNumbers(10, 23, 64, 82, 99));

const name = 'John';
for (const char of name) {
    console.log(char);
}
