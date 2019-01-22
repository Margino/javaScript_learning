'use strict';

let first = 'Хотя хpонологи не увеpены, им кажется, что Летучая Рыба решает.';
let second = 'Уравнение времени выбирает космический Каллисто.'
let third = 'Астероид, и это следует подчеркнуть, дает вращательный параметр.';
let lines = [
    first,
    second,
    third
];

function buildElement(str, expr, expr2) {
    console.log(str);
    console.log(expr);
    console.log(expr2);
}
// buildElement(first);
// buildElement`aaaa`;
// buildElement`<li></li>`;
// buildElement`<li>${lines}</li>`;
// buildElement`<li>${lines[0]}${lines[1]}</li>`;
// buildElement(['<li>', '</li>'], lines[0], lines[1]);

function buildHtml(tags, lines) {
    const newEl = lines.map((line) => {
        return `${tags[0]}line${tags[1]}`;
    });
    return newEl;
}
const result = buildHtml`<li>${lines}</li>`;
console.log(result);
