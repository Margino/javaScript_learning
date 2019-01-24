const dictionary = {
    HTML: 'Hyper Text Markup Language',
    CSS: 'Cascading Style Sheets',
    JS: 'JavaScript'
};

const addAbbreviations = (strings, ...values) => {
    const abbreviated = values.map(value => {
        if (dictionary[value]) {
            return `<abbr title="${dictionary[value]}">${value}</abbr>`
        }
        return value;
    });

    return strings.reduce((sentence, string, i) => {
        return `${sentence}${string}${abbreviated[i] || ''}`;
    },'');
};

const first = 'John';
const last = 'Doe';
const sentence = addAbbreviations`Hi, my name is ${first} ${last} and I love ${'HTML'}, ${'CSS'}, and ${'JS'}.`;
console.log(sentence);
