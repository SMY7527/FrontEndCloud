function isOdd(x) {
  return !!(x % 2);
}

let num = 12;

console.log(num % 2);

console.log(
  `${num}(는)은 ${isOdd(num) ? "홀" : "짝"}수 입니다.`
);

// 함수 정의하는 법
// 1. 함수 선언
function add1(x, y) {
  return x + y;
}
console.log(add1(2, 3));

// 2. 상수나 변수에 함수 대입 (함수도 값이다)
const subt = function (x, y) {
  return x + y;
}
console.log(subt(5, 2));

// 함수도 값이기 때문에 재정의도 가능하다
console.log(add1(12, 13));
add1 = function(x, y) {
  console.log(`${x}와 ${y}를 더합니다`);
  return x + y;
}

console.log(add1(12, 13));


// 3. 화살표 함수 : 인자를 받고 반환하는 용도로 많이 사용
const mult = (x, y) => x * y;
console.log(mult(2, 3));

// 두 줄 이상의 작업시 return이 필수
const mult2 = (x, y) => {
  console.log(`${x}와 ${y}를 곱합니다.`)
  return x * y;
};
console.log(mult2(4, 5));
