function createQueue() {
    const queue = [];
    return {
        enqueue(item) { // add
            queue.unshift(item);
        },
        dequeue() { // remove
            return queue.pop();
        },
        peek() {
            return queue[queue.length - 1];
        },
        get length() {
            return queue.length;
        },
        isEmpty() {
            return queue.length === 0;
        }
    }
}

const q = createQueue();

q.enqueue(`I'm the first!`);
q.enqueue(`I'm the second.`);
q.enqueue(`I'm the third :()`);

console.log(q.peek());
q.dequeue();
console.log(q.peek());
q.dequeue();
q.dequeue();
console.log(q.isEmpty());
