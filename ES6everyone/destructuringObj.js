const person = {
    first: 'John',
    last: 'Doe',
    links: {
      social: {
        twitter: 'https://twitter.com/jo',
        facebook: 'https://facebook.com/jo',
      },
      web: {
        blog: 'https://jo.com'
      }
    }
};

const {twitter:twi, facebook:fb } = person.links.social;
console.log(twi);
console.log(fb);

const settings = {
    width: 100,
    color: 'red'
};

const {width = 200, height = 200, color = 'green'} = settings;
console.log(width, height, color);

const { width: w = 100, height: h = 200 } = { width: 800 };
console.log(w,h);
