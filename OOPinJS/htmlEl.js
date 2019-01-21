function HtmlElement() {
    this.click = function() {
        console.log('clicked');
    }
}

function HtmlSelectElement(items = []) {
    this.items = items;

    this.addItem = function(item) {
        this.items.push(item);
    };
    this.removeItem = function(item) {
        this.items.splice(this.items.indexOf(item),1);
    };

}

HtmlElement.prototype.focus = function() {
    console.log('focused');
}

HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

const el = new HtmlElement();
const se = new HtmlSelectElement();
se.addItem('1');
se.addItem('2');
se.removeItem('1');
se.click();
console.log(se);
