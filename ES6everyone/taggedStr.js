const highlight = (strings, ...rest) => {
    let str = '';
    strings.forEach((string, i) => {
        str += `${string}<b>${rest[i] || ''}</b>`;
    });
    return str;
};

const model = 'BMW';
const year  = '2003';
const sentence = highlight`I bought my car ${model} in ${year} year`;

console.log(sentence);
