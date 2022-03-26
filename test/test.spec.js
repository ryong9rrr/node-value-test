const test_SimpleQueue = require("./example.spec.js");

test_SimpleQueue();

/*
터미널에 npm test

출력결과

<-----간단한 큐 테스트----->
큐가 비었을 때 size
true
큐가 비었을 때, 맨 앞에 요소 peek
true
1을 enqueue
true
true
dequeue
true
true
true
큐가 비어있다면 dequeue는 null을 반환한다.
true
true
true
*/
