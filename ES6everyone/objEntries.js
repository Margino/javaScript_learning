const inventory = {
    backpacks: 10,
    jeans: 23,
    hoodies: 4,
    shoes: 11
};

const nav = Object.keys(inventory);
const total = Object.values(inventory);
const all = Object.entries(inventory);
console.log(nav);
console.log(total);
console.log(all);
