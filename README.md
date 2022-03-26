# nodeJS에서 간단한 값 테스트를 위한 툴

## required

- npm

- nodeJS

## usage

1\. npm test 명령어를 통해 테스트를 진행합니다.

명령어 경로는 package.json에 test/test.spec.js로 지정을 해놓았기 때문에 test.spec.js에 테스트할 함수를 위치시킵니다.

2\. js 폴더 아래에 테스트하고 싶은 코드를 작성합니다.

3\. test 폴더 아래에 테스트 코드를 작성합니다.

1. describe(title, callback)

2. should(테스트하고 싶은 함수, 기대값)

   기대값과 결과가 같다면 true를, 다르다면 false를 리턴합니다.

## tutorial

1\. 이 레포지토리를 clone 합니다.

2\. 루트에서 터미널에 npm test 입력

3\. 콘솔 결과

```
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
```

## etc

파일의 경로를 잘 입력해주는 것이 중요합니다.

[이 repo에 대한 블로그 글 ](https://ryong9rrr.tistory.com/9)
