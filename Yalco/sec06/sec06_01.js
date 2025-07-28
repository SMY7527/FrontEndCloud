// 객체 생성과 프로퍼티 접근법
{
const food1 = {
  name: '햄버거',
  price: 5000,
  vegan: false
};

console.log(food1);
console.log(
  food1.name, // 💡 마침표 프로퍼티 접근 연산자
  food1['price'] // 💡 대괄호 프로퍼티 접근 연산자
);
}

// 프로퍼티 추가 수정
{
// 빈 객체 생성
const food2 = {};
console.log(food2);

// 프로퍼티 추가
food2.name = "샐러드";
food2.price = "6000";
food2['vegan'] = true;
console.log(food2);

// 프로퍼티 수정
food2['price'] = 6500;
food2.vegan = false;
console.log(food2);
}

console.log("\n=================================\n");

// 표현식으로 키값 정의하기
// - 대괄호[]사용
{
let idx = 0;
const obj = {
  ['key-' + ++idx] : `value-${idx}`,
  [`key-${++idx}`] : `value-${idx}`,
  ['key-' + ++idx] : `value-${idx}`,
  [idx ** idx] : 'POWER'
}
console.log(obj);
}

console.log("\n=================================\n");

// 프로퍼티 삭제
// - delete연산자
{
const pserson1 = {
  name : '홍길동',
  age : 24,
  school : '서울대',
  major : '컴퓨터공학'
};
console.log(pserson1);

delete pserson1.age;
console.log(pserson1);

delete pserson1['major'];
console.log(pserson1);

// 없는 프로퍼티를 삭제해도 오류가 발생하지는 않음
delete pserson1.hobby;
console.log(pserson1);
}

console.log("\n=================================\n");

// 키의 동적 사용
{
const product1 = {
  name : '노트북',
  color : 'gray',
  price : 800000
}

function addModifyProkperty(obj, key, value) {
  obj[key] = value;
}
function deleteProperty(obj, key) {
  delete obj[key];
}

addModifyProkperty(product1, 'inch', 16);
console.log(product1);

addModifyProkperty(product1, 'price', 750000);
console.log(product1);

deleteProperty(product1, 'color');
console.log(product1);
}

// 객체 선언 시 프로퍼티 키와 대입할 상수/변수명이
// 동일할 시 단축 표현 가능
{
const x = 1, y = 2;

const obj1 = {
  x : x,
  y : y
};
console.log(obj1);

const obj2 = {x, y};
// console.log(obj2);
}

// 응용
{
function createProduct1 (name, price, quantity) {
  const obj = {name, price, quantity};  // 이런식으로 단축해서 객체만듬
  return obj;
}
function createProduct2 (name, price, quantity) {
  return {name, price, quantity}; // 더 간단히 이렇게 반환 가능
}

const product1 = createProduct1('선풍기', 50000, 50);
const product2 = createProduct2('청소기', 125000, 32);

console.log(product1, product2);
}

// 메서드
// - 객체에 축약표현으로 정의된 함수 프로퍼티

{ // 일반적인 함수 프로퍼티 정의
const person = {
  name : '홍길동',

  salutate : function(formal) {
    return formal
    ? `안녕하십니까, ${this.name}입니다.`
    : `안녕하세요, ${this.name}이에요.`;
  }
}
console.log(person.salutate(true));
}

{ // 메서드 정의
const person = {
  name : '홍길동',

  salutate (formal) {
    return formal
    ? `안녕하십니까, ${this.name}입니다.`
    : `안녕하세요, ${this.name}이에요.`;
  }
}
console.log(person.salutate(true));
}