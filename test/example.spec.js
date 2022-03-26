// 테스트를 위한 메서드
const { describe, should } = require("../.bin/common.js");
// 테스트를 하고 싶은 모듈을 불러옵니다.
const SimpleQueue = require("../js/example.js");

// test코드 작성
function test_SimpleQueue() {
  describe("<-----간단한 큐 테스트----->", () => {
    const q = new SimpleQueue();

    describe("큐가 비었을 때 size", () => {
      should(q.size, 0);
    });

    describe("큐가 비었을 때, 맨 앞에 요소 peek", () => {
      should(q.peek, null);
    });

    describe("1을 enqueue", () => {
      q.enqueue(1);
      should(q.size, 1);
      should(q.peek, 1);
    });

    describe("dequeue", () => {
      should(q.dequeue(), 1);
      should(q.size, 0);
      should(q.peek, null);
    });

    describe("큐가 비어있다면 dequeue는 null을 반환한다.", () => {
      should(q.dequeue(), null);
      should(q.size, 0);
      should(q.peek, null);
    });
  });
}

module.exports = test_SimpleQueue;
