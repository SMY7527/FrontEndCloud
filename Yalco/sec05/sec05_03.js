// 기본값 매개변수 : 함수의 매개변수에 기본값을 지정하여 
//                  함수 호출시 대응하는 값이 넘어오지 않으면 기본값을 사용
function add1(a = 2, b = 4) {
  console.log(`${a} + ${b}`);
  return a + b;
}

console.log(
  add1(),
  add1(1),
  add1(1, 3)
);

console.log("=================================\n");

// 함수 내에서 사용 가능한 지역변수 : arguments
// - 배열의 형태를 한 객체
// - 딱히 정의하지 않아도 함수 호출시 전달된 모든 인수를 배열형태로 저장
function add2(a, b) {
  console.log('1.', arguments);
  console.log('2.', arguments[0]);
  console.log('3.', typeof arguments);
  return a + b;
}

console.log(
  '4.', add2(1, 3, 5, 7)
);

console.log("\n");

function add3(a, b) {
  for (const arg of arguments) {
    console.log(arg);
  }
  return a + b;
}
console.log(add3(1, 3, 5, 7));

console.log("\n");

// 값이 몇개인진 모르지만 넘어온 값의 평균을 구하는 함수
function getAverage() {
  let result = 0;
  for (const arg of arguments) {
    result += arg;
  }
  return result / arguments.length;
}
console.log(
  getAverage(1, 3),
  getAverage(1, 4, 6, 2)
);

// 💡 타입에 안전한 버전
function getAverage() {
  let result = 0, count = 0;
  for (const num of arguments) {
    if (typeof num !== 'number') continue;
    result += num;
    count++;
  }
  return result / count;
}

console.log(
  getAverage(2, '가', 8, true, 5)
);

console.log("\n=================================\n");

{
  const add = (a, b) => a + b;
  const sub = (a, b) => a - b;
  const mul = (a, b) => a * b;
  const div = (a, b) => a / b;

  function combineArms() {
    return (x, y) => {
      let result = x;
      for(arg of arguments) {
        console.log(arg);
        if(typeof arg !== 'function') continue;
        result = arg(result, y);
      }
      return result;
    }
  }

  const add_mul = combineArms(add, mul, 1, true);
  const add_mul_sub = combineArms(add, mul, sub);
  const add_mul_sub_div = combineArms(add, mul, sub, div);
  const add_mul_sub_div_pow = combineArms(add, mul, sub, div, (x, y) => x ** y);

  console.log(add_mul(8, 3));
  console.log(add_mul_sub(8, 3));
  console.log(add_mul_sub_div(8, 3));
  console.log(add_mul_sub_div_pow(8, 3));
}

console.log("\n=================================\n");

// 나머지 변수 - ...
{
  console.log(
    '3.',
    classIntro(3, '김민지', '영희', '철수', '보라')
  ); // 호이스팅

  function classIntro (classNo, teacher, ...children) {
    console.log('1.', children);
    console.log('2.', arguments);

    let childrenStr = '';
    for (const child of children) {
      if (childrenStr) childrenStr += ', ';
      childrenStr += child;
    }
    return `${classNo}반의 선생님은 ${teacher}, `
      + `학생들은 ${childrenStr}입니다.`
  }
}

{
  const add = (a, b) => a + b;
  const sub = (a, b) => a - b;
  const mul = (a, b) => a * b;
  const div = (a, b) => a / b;

  function combineArms(x, y, ...args) {
    let result = x;
    for(const arg of args) {
      if(typeof arg !== 'function') continue;
      result = arg(result, y);
    }
    return result;
  }

  console.log(combineArms(8, 3, add, mul));
  console.log(combineArms(8, 3, add, mul, sub));
  console.log(combineArms(8, 3, add, mul, sub, div));
  console.log(combineArms(8, 3, add, mul, sub, div, (x, y) => x ** y));
}

{
  const add = (a, b) => a + b;
  const sub = (a, b) => a - b;
  const mul = (a, b) => a * b;
  const div = (a, b) => a / b;
  
  function pipe(...fns) {
    return (x, y) => fns.reduce((acc, fn) => fn(acc, y), x);
  }

  const process = pipe(add, mul, sub);
  console.log(process(8, 3)); // ((8 + 3) * 3) - 3
}