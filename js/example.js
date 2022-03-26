// 예제) 간단한 큐

// 큐를 구현하는 곳

class SimpleQueue {
  #queue;
  #front;
  #rear;
  constructor() {
    this.#queue = [];
    this.#front = this.#rear = 0;
  }

  enqueue(value) {
    this.#queue[this.#rear++] = value;
    return true;
  }

  dequeue() {
    if (this.size === 0) return null;

    const value = this.#queue[this.#front];
    delete this.#queue[this.#front];
    this.#front++;
    return value;
  }

  get size() {
    return this.#rear - this.#front;
  }

  get peek() {
    return this.size === 0 ? null : this.#queue[this.#front];
  }
}

// module에 export 해줍니다.
module.exports = SimpleQueue;
