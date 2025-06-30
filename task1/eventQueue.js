class EventQueue {
  constructor() {
    this.queue = [];
  }

  push(event) {
    this.queue.push(event);
  }

  pop() {
    if (this.queue.length === 0) return null;
    return this.queue.shift();
  }

  batchPush(events) {
    for (let event of events) {
      this.push(event);
    }
  }

  size() {
    return this.queue.length;
  }
}


module.exports = EventQueue;