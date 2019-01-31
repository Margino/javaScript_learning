const safeHandler = {
    set(target, name, value) {
        const likeKey = Object.keys(target).find(key => {
            return key.toLowerCase() === name.toLowerCase();
        });

        if (!(name in target) && likeKey) {
            throw new Error(`Looks like we already have a(an) ${name} property but with the case of ${likeKey}`);
        }

        target[name] = value;
    }
};

const safety = new Proxy({ id: 100 }, safeHandler);

safety.ID = 150;







// ==========

const person = {
    name: 'John',
    age: 54
};

const personProxy = new Proxy(person, {
    get(name, target) {
        return target[name];
    }
});

personProxy.name = 'Smith';
// console.log(person);
