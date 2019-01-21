function mixin(target, ...sourses) {
    Object.assign(target, ...sourses);
}

const canEat = {
    eat: function() {
        this.huger--;
        console.log('eating');
    }
};

const canWalk = {
    walk: function() {
        console.log('walking');
    }
};

const canSwim = {
    swim: function() {
        console.log('swim');
    }
};

// const person = Object.assign({}, canEat, canWalk);

function Person() {
}


mixin(Person.prototype, canEat, canWalk);
const person = new Person();

console.log(person);

function GoldFish() {
}
mixin(GoldFish.prototype, canEat, canSwim);
const goldFish = new GoldFish();

for (let key in goldFish)
  console.log(goldFish[key]);
