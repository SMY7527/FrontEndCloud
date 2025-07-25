// 일급 객체
// 1) 상수 또는 변수에 할당될 수 있다
// 2) 다른 함수에 인자로 전달될 수 있다
// 3) 다른 함수의 결과값으로서 반환될 수 있다

// 즉 자바스크립트의 함수는 일급객체이다
// function greet(name, callback) {
//   console.log("안녕하세요, " + name);
//   callback();
// }

function sayBye() {
  console.log("안녕히 가세요!");
}

// greet("민수", sayBye);

function greet(name, callback) {
  console.log("안녕하세요, " + name);
  sayBye();
}

greet("성수");
